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
	const [errLevel, setErrLevel] = useState<string>('Q');
	const [imgUrl, setImgUrl] = useState<string>('');
	const [imgWidth, setImgWidth] = useState<number>(24);
	const [imgHeight, setImgHeight] = useState<number>(24);
	const [centerImg, setCenterImg] = useState<boolean>(false);
	const [imgX, setImgX] = useState<number | undefined>(undefined);
	const [imgY, setImgY] = useState<number | undefined>(undefined);

	return (
		<section className={css.tweakbars_container}>
			<TBLeft
				size={size}
				setSize={setSize}
				bgColor={bgColor}
				setBgColor={setBgColor}
				fgColor={fgColor}
				setFgColor={setFgColor}
				setErrLevel={setErrLevel}
			/>
			<QrLogo
				valueToQr={valueToQr || 'QRgen'}
				size={size}
				bgColor={bgColor}
				fgColor={fgColor}
				level={errLevel}
				imgUrl={imgUrl}
				imgWidth={imgWidth}
				imgHeight={imgHeight}
				imgX={imgX}
				imgY={imgY}
			/>
			<TBRight
				imgUrl={imgUrl}
				setImgUrl={setImgUrl}
				imgWidth={imgWidth}
				setImgWidth={setImgWidth}
				imgHeight={imgHeight}
				setImgHeight={setImgHeight}
				centerImg={centerImg}
				setCenterImg={setCenterImg}
				imgX={imgX}
				setImgX={setImgX}
				imgY={imgY}
				setImgY={setImgY}
				size={size}
			/>
		</section>
	);
};

export default Tweakbars;
