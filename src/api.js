import axios from 'axios';
export const API = 'http://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json';

export const getProducts = async () => {
	try {
		const response = await axios.get(API);
		if (response) return response;
	} catch (exception) {
		throw exception;
	}
};
