import styled from 'styled-components';

const Search = styled.input`
	align-self: center;
	min-width: 700px;
	height: 31px;
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #a8a8a8;
	border: 0px solid;
	outline: none;
`;
const Icon = styled.div`
	width: 30px;
	position: relative;
	top: 20px;
	right: 520px;
`;
const Line = styled.span`
	width: 1102px;
	height: 0px;
	border: 1px solid #bdbdbd;
	margin
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 57px;
`;

const SearchInput = ({ setInputValue }) => {
	return (
		<Wrapper>
			<Icon>
				<i className="fa fa-search" />
			</Icon>
			<Search placeholder="Search for your sneakers" onChange={(e) => setInputValue(e.target.value)} />
			<Line />
		</Wrapper>
	);
};

export default SearchInput;
