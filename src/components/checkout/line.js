import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Line = styled.span`
	display: flex;
	justify-content: space-between;
	margin-top: 67px;
	margin-left: 346px;
	margin-right: 315px;
`;
const BallWrapper = styled.div`text-align: center;s`;
const Ball = styled.div`
	border-radius: 50%;
	height: 15px;
	width: 15px;
	background: ${(props) => (props.achieved ? '#61CB46' : '#E8E8E8')};
`;
const Stage = styled.p`
	font-family: Arial;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
	color: #000000;
	width: 40px;
`;

const BallContent = ({ label, achieved }) => {
	return (
		<BallWrapper>
			<Ball achieved={achieved} />
			<Stage>{label}</Stage>
		</BallWrapper>
	);
};

const Wrapper = styled.div``;

const LineCheckout = () => {
	const location = useLocation();

	return (
		<Wrapper>
			<Line>
				<BallContent achieved={true} label={'Cart'} />
				<BallContent achieved={true} label={'Payment options'} />
				<BallContent achieved={location.hash.length > 0} label={'Receipt'} />
			</Line>
		</Wrapper>
	);
};

export default LineCheckout;
