import styled from 'styled-components';

const Image = styled.img`
	max-width: 630px;
	height: auto;
	border-radius: 11px;
	object-fit: cover;
`;

const ImageCheckout = ({ image }) => {
	return <Image src={image} />;
};

export default ImageCheckout;
