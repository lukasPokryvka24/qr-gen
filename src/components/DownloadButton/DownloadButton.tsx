interface IProps {
	downloadQRCode: () => void;
}

const DownloadButton: React.FunctionComponent<IProps> = ({
	downloadQRCode
}) => {
	return <button onClick={downloadQRCode}>Download</button>;
};

export default DownloadButton;
