import styled from 'styled-components';
import flags from '../../assets/images/bank-flags.png';
import cards from '../../assets/images/card-flags.png';
import apple from '../../assets/images/apple-flag.png';
import Button from '../button';

const Details = styled.div`

	max-width: 730px;

	background: #f7f7f7;
	border-radius: 11px;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 29.63px;
`;

const Total = styled.div`
	text-align: left;
	margin-left: 38px;
`;

const CartTotal = styled.p`
	font-size: 22px;
	color: #000000;
`;
const Title = styled.p`
	font-size: 16px;
	line-height: 20px;
	color: #000000;
`;

const Description = styled.span`
	font-size: 16px;
	line-height: 25px;
	color: #a5a5a5;
`;

const DeliveryWraper = styled.div`text-align: left;`;

const Delivery = styled.p`
	font-size: 20px;
	line-height: 154.6%;
	color: #000000;
`;

const DeliveryDetails = styled.span`
	font-size: 16px;
	line-height: 153%;
	letter-spacing: 0.6 px;
	color: #979797;
`;

const CostWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
`;
const CostDivider = styled.div`
	display: flex;
	flex-direction: column;
`;

const TotalCost = styled.span``;
const Price = styled.span`
	padding-left: 10px;
	margin-right: 54px;
	font-size: 43px;
	line-height: 44px;
	color: #000000;
`;

const SelectPayment = styled.div`
	height: 75px;
	margin-left: 38px;
	margin-right: 30px;
	margin-bottom: 15px;
	background: #ffffff;
	border: 1px solid #5dac50;
	border-radius: 10.8766px;
	cursor: pointer;
`;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TextPayment = styled.span`
	margin-left: 30px;
	margin-top: 28px;
	font-size: 16px;
	line-height: 22px;
	color: #535353;
`;

const BankFlags = styled.img`
	margin-right: 24px;
	margin-top: 24px;
`;
const ButtonContinueWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin: 24px 0;
`;

const TextDetails = () => (
	<Container>
		<Total>
			<CartTotal>Cart Total</CartTotal>
			<Title>SS Sneaker</Title>
			<Description>X1 green Size 41</Description>
			<br />
			<Description>item # 1232131</Description>
		</Total>
		<DeliveryWraper>
			<Delivery>Delivery Details</Delivery>
			<DeliveryDetails>Felipe Domingues</DeliveryDetails>
			<br />
			<DeliveryDetails>Phone no : 2123123123</DeliveryDetails>
			<br />
			<DeliveryDetails>Address: rels st ,423900234</DeliveryDetails>
			<br />
			<CostWrapper>
				<CostDivider>
					<TotalCost>Total Cost</TotalCost>
					<DeliveryDetails>Delivery included</DeliveryDetails>
				</CostDivider>
				<Price>$100</Price>
			</CostWrapper>
		</DeliveryWraper>
	</Container>
);

const PaymentDetails = () => (
	<div>
		<CartTotal>Select Your Payment Method</CartTotal>
		<SelectPayment>
			<ButtonWrapper>
				<TextPayment>Online Banking</TextPayment>
				<BankFlags src={flags} />
			</ButtonWrapper>
		</SelectPayment>
		<SelectPayment>
			<ButtonWrapper>
				<TextPayment>Card Payment</TextPayment>
				<BankFlags src={cards} />
			</ButtonWrapper>
		</SelectPayment>
		<SelectPayment>
			<ButtonWrapper>
				<TextPayment>Apple Pay</TextPayment>
				<BankFlags src={apple} />
			</ButtonWrapper>
			<ButtonContinueWrapper>
				<Button label={'Continue'} />
			</ButtonContinueWrapper>
		</SelectPayment>
	</div>
);

const DetailsCheckout = () => {
	return (
		<Details>
			<TextDetails />
			<PaymentDetails />
		</Details>
	);
};

export default DetailsCheckout;
