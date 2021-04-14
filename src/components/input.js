import { Fragment } from 'react';
import styled from 'styled-components';

const Search = styled.input`
	margin-top:168px;
	align-self: center;
	margin-bottom: 57px;
	width: 1100px;
	height: 31px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 33px;
	text-align: center;
	color: #a8a8a8;
`;
const Label = styled.label`
	font-family: Regular 20px/26px Source Sans Pro;
	font-size: 12px;
	letter-spacing: 0.4px;
	color: #170c3a;
	opacity: 1;
	align-self: center;
	padding-left: 5px;
`;

const SearchInput = ({ setInputValue }) => {
	return (
		<Fragment>
			<Label> Search </Label>
			<Search placeholder="Search for your sneakers" onChange={(e) => setInputValue(e.target.value)} />
		</Fragment>
	);
};

export default SearchInput;
