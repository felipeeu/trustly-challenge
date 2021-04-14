import styled from 'styled-components';
import ButtonCard from './button';
import Select from './select';

const Image = styled.img`
	height: 171px;
	width: 297px;
`;

const Detail = styled.div`
	height: 119px;
	width: 297px;
`;
const Title = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;
const Price = styled.p`
	font-family: Open Sans;
	font-style: normal;
	font-weight: 600;
	font-size: 21px;
	line-height: 18px;
	text-align: center;
	color: #000000;
`;

const Card = styled.div`
	width: 297px;
	height: 373px;
	left: 0.9px;
	top: 0px;
	background: #ffffff;
	box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
`;

const CardProduct = ({ title, price, image }) => {
	return (
		<Card>
			<Image src={image} />
			<Detail>
				<Title>{title}</Title>
				<Select label="Size" values={[ '41', '42', '43', '44' ]} />
				<Select label="Quantity" values={[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]} />
				<Price>${price}</Price>
			</Detail>
			<ButtonCard />
		</Card>
	);
};

export default CardProduct;
