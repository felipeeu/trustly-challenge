import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts } from './api';
import Home from './Home.js';
import Header from './components/header';

function App() {
	const [ inputValue, setInputValue ] = useState('');
	const [ data, setData ] = useState([]);
	console.log(data);
	useEffect(() => {
		getProducts().then((res) => setData(res.data.results));
	}, []);
	return (
		<div className="App">
			<Header />
			<Home products={data} setInputValue={setInputValue} />
		</div>
	);
}

export default App;
