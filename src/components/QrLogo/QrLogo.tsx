import { QRCodeSVG } from 'qrcode.react';

interface IProps {
	valueToQr: string;
}

const QrLogo: React.FunctionComponent<IProps> = ({ valueToQr }) => (
	<QRCodeSVG value={valueToQr} />
);

export default QrLogo;
