import { Button } from '../button';
import { establishPayWithMyBank } from '../../new-transaction';

const ButtonCheckout = ({ label, amount, selected }) => {

	return <Button onClick={() => selected ? establishPayWithMyBank(amount):alert("Sorry! Only the online banking option is available . ")}>{label}</Button>;
};

export default ButtonCheckout;
