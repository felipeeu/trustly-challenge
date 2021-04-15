import styled from 'styled-components';

export const Header = styled.div`
	width: 100vw;
	height: 87px;
	background: #f1f1f1;
`;

const HomeHeader = ({ label }) => {
	return <Header>{label}</Header>;
};

export default HomeHeader;
