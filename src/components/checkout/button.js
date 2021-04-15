import { Button } from '../button';
import { establishPayWithMyBank } from '../../new-transaction';

const ButtonCheckout = ({ label, amount }) => {

	return <Button onClick={() => establishPayWithMyBank(amount)}>{label}</Button>;
};

export default ButtonCheckout;
