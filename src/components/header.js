import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';

export const Header = styled.div`
	width: 100vw;
	height: 87px;
	background: #f1f1f1;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Avatar = styled.img`
	position: absolute;
	right: 108px;
	width: 53px;
	height: auto;
	clip-path: circle(25px at center);
`;

export const HeaderText = styled.span`
	font-family: Arial;
	font-weight: normal;
	font-size: 26px;
	line-height: 30px;
	text-align: center;
	color: #000000;
`;

const HomeHeader = ({ label }) => {
	return (
		<Header>
			<HeaderText>{label}</HeaderText>
			<Avatar src={avatar} />
		</Header>
	);
};

export default HomeHeader;
