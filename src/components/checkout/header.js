import styled from 'styled-components';
import { Header } from '../header';
import { useHistory } from 'react-router-dom';
import { Avatar } from '../header';
import avatar from '../../assets/images/avatar.png';

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

const CheckoutHeader = ({ label, routeBack }) => {
	const history = useHistory();

	return (
		<Header>
			<BackButton onClick={() => history.push(routeBack)}>
				<i class="fa fa-arrow-left" /> Back{' '}
			</BackButton>
			{label}
			<Avatar src={avatar} />
		</Header>
	);
};

export default CheckoutHeader;
