import { useState } from 'react';
import styled from 'styled-components';
import flags from '../../assets/images/bank-flags.png';
import cards from '../../assets/images/card-flags.png';
import apple from '../../assets/images/apple-flag.png';
import Button from './button';

const Details = styled.div`
	min-width: 730px;
	border-radius: 11px;
	background: #f7f7f7;
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
	border: 1px solid ${(props) => (props.selected ? '#5dac50' : '#FFFFFF')};
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
const ButtonContinue = styled(Button)`
	position :absolute;
	right:217px;
`;

const TextDetails = ({ data }) => (
	<Container>
		<Total>
			<CartTotal>Cart Total</CartTotal>
			<Title>{data.description}</Title>
			<Description>x {data.quantity}</Description>
			<Description> {`  ${data.color}  `}</Description>
			<Description> Size{`  ${data.size}`}</Description>
			<br />
			<Description>Item{` #${data.id}`}</Description>
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
				<Price>${parseInt(data.quantity) * parseFloat(data.price)}</Price>
			</CostWrapper>
		</DeliveryWraper>
	</Container>
);

const PaymentDetails = ({ quantity, price }) => {
	const [ selected, setSelected ] = useState('bank');
	const amount = parseInt(quantity) * parseFloat(price);
	const parsedAmount = amount.toFixed(2);

	return (
		<div>
			<CartTotal>Select Your Payment Method</CartTotal>
			<SelectPayment selected={selected === 'bank'}>
				<ButtonWrapper onClick={() => setSelected('bank')}>
					<TextPayment>Online Banking</TextPayment>
					<BankFlags src={flags} />
				</ButtonWrapper>
			</SelectPayment>
			<SelectPayment selected={selected === 'card'}>
				<ButtonWrapper onClick={() => setSelected('card')}>
					<TextPayment>Card Payment</TextPayment>
					<BankFlags src={cards} />
				</ButtonWrapper>
			</SelectPayment>
			<SelectPayment selected={selected === 'apple'}>
				<ButtonWrapper onClick={() => setSelected('apple')}>
					<TextPayment>Apple Pay</TextPayment>
					<BankFlags src={apple} />
				</ButtonWrapper>
			</SelectPayment>
			<ButtonContinue label={'Continue'} amount={parsedAmount} selected={selected === 'bank'} />
		</div>
	);
};

const DetailsCheckout = ({ checkoutData }) => {
	return (
		<Details>
			<TextDetails data={checkoutData} />
			<PaymentDetails quantity={checkoutData.quantity} price={checkoutData.price} />
		</Details>
	);
};

export default DetailsCheckout;
