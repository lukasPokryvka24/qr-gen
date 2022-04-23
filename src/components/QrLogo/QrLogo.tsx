import { QRCodeSVG } from 'qrcode.react';

interface IProps {
	valueToQr: string;
	size: number;
	bgColor: string;
	fgColor: string;
}

const QrLogo: React.FunctionComponent<IProps> = ({
	valueToQr,
	size,
	bgColor,
	fgColor
}) => (
	<section>
		<QRCodeSVG
			value={valueToQr}
			size={size}
			bgColor={bgColor}
			fgColor={fgColor}
		/>
	</section>
);

export default QrLogo;
