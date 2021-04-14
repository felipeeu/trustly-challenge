import { Fragment } from 'react';
import styled from 'styled-components';
import CheckoutDetails from './components/checkout/details';
import LineCheckout from './components/checkout/line';
import ImageCheckout from './components/checkout/image';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Checkout = () => {
	return (
		<Fragment>
			<LineCheckout />
			<Wrapper>
				<ImageCheckout />
				<CheckoutDetails />
			</Wrapper>
		</Fragment>
	);
};

export default Checkout;
