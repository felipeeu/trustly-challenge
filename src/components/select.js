import { Fragment, useState } from 'react';
import styled from 'styled-components';

const SelectCard = styled.select`
	height: 27.92995262145996px;
	width: 69.37439727783203px;
	border: 0.900966px solid #e8e8e8;
	box-sizing: border-box;
	border-radius: 25.2271px;
`;
const Label = styled.span`
	padding: 0 10px;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	/* or 147% */

	color: #8d8d8d;
`;

const Select = ({ label, values }) => {
	const [ valueSelect, setValue ] = useState(null);
	return (
		<Fragment>
			<Label>{label}</Label>
			<SelectCard id="checkTag" value={valueSelect} onChange={(e) => setValue(e.target.value)}>
				{values.map((value, index) => {
					return <option key={index}>{value}</option>;
				})}
			</SelectCard>
		</Fragment>
	);
};

export default Select;
