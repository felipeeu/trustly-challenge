import { Fragment } from 'react';
import styled from 'styled-components';
import DetailsCheckout from './components/checkout/details';
import DetailsConfirmation from './components/confirmation/details';
import LineCheckout from './components/checkout/line';
import ImageCheckout from './components/checkout/image';
import { useHistory } from 'react-router-dom';
import { addPanelListener } from './add-listener';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 47px;
	margin-bottom: 132px;
`;

const Checkout = ({ checkoutData, child }) => {
	const history = useHistory();

	if (Object.keys(checkoutData).length === 0) {
		history.push('/');
	}

	addPanelListener(
		() => {
			history.replace('/confirmation');
		},
		(err) => alert('An Error Ocurred')
	);

	return (
		<Fragment>
			<LineCheckout />
			<Wrapper>
				<ImageCheckout image={checkoutData.maxresURL} />
				{child === 'checkout' ? (
					<DetailsCheckout checkoutData={checkoutData} />
				) : (
					<DetailsConfirmation checkoutData={checkoutData} />
				)}
			</Wrapper>
		</Fragment>
	);
};

export default Checkout;
