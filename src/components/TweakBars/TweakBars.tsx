import QrLogo from '../QrLogo/QrLogo';

interface IProps {
	valueToQr: string;
}

const Tweakbars: React.FunctionComponent<IProps> = ({ valueToQr }) => {
	return (
		<div>
			<QrLogo valueToQr={valueToQr} />
		</div>
	);
};

export default Tweakbars;
