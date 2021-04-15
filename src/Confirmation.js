import { Fragment } from 'react';
import styled from 'styled-components';
import CheckoutDetails from './components/checkout/details';
import LineCheckout from './components/checkout/line';
import ImageCheckout from './components/checkout/image';
import { useHistory } from 'react-router-dom';
import DetailsConfirmation from './components/confirmation/details'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const Confirmation = ({ checkoutData }) => {
	const history = useHistory();
	// if (Object.keys(checkoutData).length === 0) {
	// 	history.push('/');
	// }
	return (
		<Fragment>
			<LineCheckout />
			<Wrapper>
				<ImageCheckout image={checkoutData.maxresURL} />
				{/* <CheckoutDetails checkoutData={checkoutData} /> */}
				<DetailsConfirmation checkoutData={checkoutData} />
			</Wrapper>
		</Fragment>
	);
};

export default Confirmation;