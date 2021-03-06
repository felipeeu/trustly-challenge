import styled from 'styled-components';

export const Button = styled.button`
	background: #6b8067;
	border-radius: 4.5px;
	height: 42px;
	width: 275px;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 19px;
	text-align: center;
	color: #ffffff;
`;

const ButtonCard = ({ label, onClick }) => {
	return <Button onClick={() => onClick()}>{label}</Button>;
};

export default ButtonCard;
