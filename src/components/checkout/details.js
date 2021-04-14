import styled from 'styled-components';

const Details = styled.div`
	position: absolute;
	left: 44.72%;
	right: 7.16%;
	top: 27.5%;
	bottom: 0%;
	max-width: 730px;

	background: #f7f7f7;
	border-radius: 10.8766px;
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

const DetailsCheckout = () => {
	return (
		<Details>
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
		</Details>
	);
};

export default DetailsCheckout;
