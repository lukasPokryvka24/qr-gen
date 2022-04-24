import { QRCodeSVG } from 'qrcode.react';

interface IProps {
	valueToQr: string;
	size: number;
	bgColor: string;
	fgColor: string;
	level: string;
}

const QrLogo: React.FunctionComponent<IProps> = ({
	valueToQr,
	size,
	bgColor,
	fgColor,
	level
}) => (
	<section>
		<QRCodeSVG
			value={valueToQr}
			size={size}
			bgColor={bgColor}
			fgColor={fgColor}
			level={level}
		/>
	</section>
);

export default QrLogo;
