import css from '../../styles/DownloadButton.module.css';
import { downloadPng } from 'svg-crowbar';

const DownloadButton: React.FunctionComponent = () => {
	const downloadQRCode = (): void => {
		downloadPng(document.querySelector('svg'), 'qrgen-qrcode', {
			css: 'internal'
		});
	};
	return (
		<button onClick={downloadQRCode} className={css.dl_button}>
			Download
		</button>
	);
};

export default DownloadButton;
