import { QRCodeSVG } from 'qrcode.react';

interface IProps {
	valueToQr: string;
	size: number;
	bgColor: string;
	fgColor: string;
	level: string;
	imgUrl: string;
}

const QrLogo: React.FunctionComponent<IProps> = ({
	valueToQr,
	size,
	bgColor,
	fgColor,
	level,
	imgUrl
}) => (
	<section>
		<QRCodeSVG
			value={valueToQr}
			size={size}
			bgColor={bgColor}
			fgColor={fgColor}
			level={level}
			imageSettings={{ src: imgUrl, height: 24, width: 24, excavate: true }}
		/>
	</section>
);

export default QrLogo;
