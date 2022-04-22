import css from '../../styles/Input.module.css';

interface IProps {
	valueToQr: string;
	setValueToQr: (value: string) => void;
}

const Input: React.FunctionComponent<IProps> = ({
	valueToQr,
	setValueToQr
}) => {
	return (
		<section className={css.input_container}>
			<input
				type="text"
				onChange={(e) => setValueToQr(e.target.value)}
				value={valueToQr}
				placeholder="What should I turn into QR?"
			/>
		</section>
	);
};

export default Input;
