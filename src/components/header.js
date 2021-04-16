import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';

export const Header = styled.div`
	width: 100vw;
	height: 87px;
	background: #f1f1f1;
`;
export const Avatar = styled.img`
	position: absolute;
	right: 108px;
	width: 53px;
	height: auto;
	clip-path: circle(25px at center);
	margin-top: 20px;
`;

const HomeHeader = ({ label }) => {
	return (
		<Header>
			{label}
			<Avatar src={avatar} />
		</Header>
	);
};

export default HomeHeader;
