import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './api';
import Home from './Home.js';
import HomeHeader from './components/header';
import CheckoutHeader from './components/checkout/header';
import Checkout from './Checkout';
import { Route, useLocation } from 'react-router-dom';

function App() {
	const [ inputValue, setInputValue ] = useState('');
	const [ data, setData ] = useState([]);
	const [ checkoutData, setCheckoutData ] = useState({});
	const location = useLocation();

	const filterById = (id, size, quantity) => {
		const checkoutInfo = data && data.find((item) => item.id === id);
		setCheckoutData({ quantity, size, ...checkoutInfo });
	};

	useEffect(() => {
		getProducts().then((res) => setData(res.data.results));
	}, []);

	useEffect(() => {}, [ inputValue ]);
	return (
		<div className="App">
			<Route exact path="/">
				<HomeHeader label={'Sneakers'} />
				<Home products={data} setInputValue={setInputValue} filterById={filterById} />
			</Route>
			<Route path="/checkout">
				<CheckoutHeader label={'Checkout'} />
				<Checkout checkoutData={checkoutData} />
			</Route>
		</div>
	);
}

export default App;
