import QrLogo from '../QrLogo/QrLogo';
import TBLeft from './TBLeft/TBLeft';
import TBRight from './TBRight/TBRight';
import css from '../../styles/Tweakbars.module.css';
import { useState } from 'react';

interface IProps {
	valueToQr: string;
}

const Tweakbars: React.FunctionComponent<IProps> = ({ valueToQr }) => {
	const [size, setSize] = useState<number>(128);
	const [bgColor, setBgColor] = useState<string>('#ffffff');
	const [fgColor, setFgColor] = useState<string>('#000000');

	return (
		<section className={css.tweakbars_container}>
			<TBLeft
				size={size}
				setSize={setSize}
				bgColor={bgColor}
				setBgColor={setBgColor}
				fgColor={fgColor}
				setFgColor={setFgColor}
			/>
			<QrLogo
				valueToQr={valueToQr}
				size={size}
				bgColor={bgColor}
				fgColor={fgColor}
			/>
			<TBRight />
		</section>
	);
};

export default Tweakbars;
