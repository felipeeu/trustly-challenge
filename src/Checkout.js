import { Fragment } from 'react';
import styled from 'styled-components';
import CheckoutDetails from './components/checkout/details';
import LineCheckout from './components/checkout/line';
import ImageCheckout from './components/checkout/image';
import { useHistory } from 'react-router-dom';
import {addPanelListener} from './add-listener'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Checkout = ({ checkoutData }) => {
	const history = useHistory();
	if (Object.keys(checkoutData).length === 0) {
		history.push('/');
	}

	addPanelListener(()=> history.replace('/confirmation'), (err)=> alert("ERRO") )

	return (
		<Fragment>
			<LineCheckout />
			<Wrapper>
				<ImageCheckout image={checkoutData.maxresURL} />
				<CheckoutDetails checkoutData={checkoutData} />
			</Wrapper>
		</Fragment>
	);
};

export default Checkout;
