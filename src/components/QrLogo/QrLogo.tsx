import { QRCodeSVG } from 'qrcode.react';

interface IProps {
	valueToQr: string;
	size: number;
	bgColor: string;
	fgColor: string;
	level: string;
	imgUrl: string;
	imgWidth: number;
	imgHeight: number;
	imgX: number | undefined;
	imgY: number | undefined;
	includeMargin: boolean;
}

const QrLogo: React.FunctionComponent<IProps> = ({
	valueToQr,
	size,
	bgColor,
	fgColor,
	level,
	imgUrl,
	imgWidth,
	imgHeight,
	imgX,
	imgY,
	includeMargin
}) => {
	const imageSettings = imgUrl
		? {
				src: imgUrl,
				height: imgHeight,
				width: imgWidth,
				x: imgX,
				y: imgY,
				excavate: true
		  }
		: undefined;
	return (
		<section>
			<QRCodeSVG
				value={valueToQr}
				size={size}
				bgColor={bgColor}
				fgColor={fgColor}
				level={level}
				includeMargin={includeMargin}
				imageSettings={imageSettings}
			/>
		</section>
	);
};

export default QrLogo;
