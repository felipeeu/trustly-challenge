import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Button = styled.button`
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

const ButtonCard = ({ label, filterById, id, size, quantity }) => {
	const history = useHistory();
	return (
		<Button
			onClick={() => {
				history.push('/checkout');
				filterById(id, size, quantity);
			}}
		>
			{label}
		</Button>
	);
};

export default ButtonCard;
