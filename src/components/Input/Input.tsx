import css from '../../styles/Input.module.css';
import InputButton from './InputButton/InputButton';

const Input: React.FunctionComponent = () => {
	return (
		<section className={css.input_container}>
			<input type="text" placeholder="What should I turn into QR?" />
			<InputButton />
		</section>
	);
};

export default Input;
