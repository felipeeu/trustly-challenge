import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './api';
import Home from './Home.js';
import HomeHeader from './components/header';
import CheckoutHeader from './components/checkout/header';
import Checkout from './Checkout';

import { Route } from 'react-router-dom';

function App() {
	const [ inputValue, setInputValue ] = useState('');
	const [ data, setData ] = useState([]);
	const [ checkoutData, setCheckoutData ] = useState({});

	const filterById = (id, size, quantity) => {
		const checkoutInfo = data && data.find((item) => item.id === id);
		setCheckoutData({ quantity, size, ...checkoutInfo });
	};
	const fetchProducts = () => getProducts().then((res) => setData(res.data.results));

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(
		() => {
			inputValue === ''
				? fetchProducts()
				: setData(data.filter((item) => item.description.toLowerCase().includes(inputValue.toLowerCase())));
		},
		[ inputValue]
	);
	return (
		<div className="App">
			<Route exact path="/">
				<HomeHeader label={'Sneakers'} />
				<Home products={data} setInputValue={setInputValue} filterById={filterById} />
			</Route>
			<Route path="/checkout">
				<CheckoutHeader label={'Checkout'} routeBack={'/'} />
				<Checkout checkoutData={checkoutData} child={'checkout'} />
			</Route>
			<Route path="/confirmation">
				<CheckoutHeader label={'Review and Confirmation'} routeBack={'/checkout'} />
				<Checkout checkoutData={checkoutData} child={'confirmation'} />
			</Route>
		</div>
	);
}

export default App;
