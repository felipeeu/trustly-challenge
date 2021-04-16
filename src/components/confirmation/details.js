import styled from 'styled-components';
import { Button } from '../button';
import { Details, ProductDetails, PriceDetails, CartTotal, Total, Title } from '../checkout/details';
import greenBank from '../../assets/images/green-bank-icon.png';

const Wrapper = styled.div``;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: left;
	margin-left: 50px;
	margin-right: 59px;
	padding-top: 20px;
	margin-top: 64px;
`;

const Summary = styled(Total)`
margin-left:unset !important

`;

const ButtonOrder = styled(Button)`

`;
const GreenBank = styled.img``;
const BankWrapper = styled.div`display: flex;`;

const ReviewDetails = ({ data }) => (
	<Wrapper>
		<Row>
			<Summary>
				<CartTotal>Order Summary</CartTotal>
				<ProductDetails data={data} />
			</Summary>
			<Summary>
				<CartTotal>Payment Method</CartTotal>
				<BankWrapper>
					<GreenBank src={greenBank} />
					<Title>Online Banking</Title>
				</BankWrapper>
			</Summary>
		</Row>
		<Row>
			<PriceDetails data={data} />
			<ButtonOrder>Place Order</ButtonOrder>
		</Row>
	</Wrapper>
);

const DetailsConfirmation = ({ checkoutData }) => {
	return (
		<Details>
			<ReviewDetails data={checkoutData} />
		</Details>
	);
};

export default DetailsConfirmation;
