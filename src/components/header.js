import styled from 'styled-components';

const HomeHeader = styled.div`
	width: 100vw;
	height: 87px;
	background: #f1f1f1;
`;

const Header = ({label}) => {
	return <HomeHeader>{label}</HomeHeader>;
};

export default Header;
