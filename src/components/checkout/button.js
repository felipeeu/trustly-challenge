import { Button } from '../button';
import { establishPayWithMyBank } from '../../new-transaction';

const ButtonCheckout = ({ label }) => {
	return <Button onClick={() => establishPayWithMyBank()}>{label}</Button>;
};

export default ButtonCheckout;
