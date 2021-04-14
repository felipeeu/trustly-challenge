import styled from 'styled-components';

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
	background: #61cb46;
`;
const Stage = styled.p`
	font-family: Arial;
	font-size: 16px;
	line-height: 18px;
	text-align: center;
  color: #000000;
  width:40px;
`;

const BallContent = ({ label }) => {
	return (
		<BallWrapper>
			<Ball />
			<Stage>{label}</Stage>
		</BallWrapper>
	);
};

const Wrapper = styled.div``;

const LineCheckout = ({ label }) => {
	return (
		<Wrapper>
			<Line>
				<BallContent label={'Cart'} />
				<BallContent label={'Payment options'} />
				<BallContent label={'Receipt'} />
			</Line>
		</Wrapper>
	);
};

export default LineCheckout;
