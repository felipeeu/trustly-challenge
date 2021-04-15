import styled from 'styled-components';
import { Header } from '../header';
import { useHistory } from 'react-router-dom';

const BackButton = styled.button`
	position: absolute;
	width: 115px;
	height: 35px;
	left: 109px;
	top: 32px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 17.4025px;
	outline: none;
`;

const CheckoutHeader = ({ label }) => {
	const history = useHistory();
	return (
		<Header>
			<BackButton onClick={() => history.push('/')}>
				<i class="fa fa-arrow-left" /> Back{' '}
			</BackButton>
			{label}
		</Header>
	);
};

export default CheckoutHeader;
