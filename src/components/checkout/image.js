import styled from 'styled-components';

const Image = styled.img`
	width: 730px;
	height: 500px;
	border-radius: 11px;
`;

const ImageCheckout = ({ image }) => {
	return <Image src={image} />;
};

export default ImageCheckout;
