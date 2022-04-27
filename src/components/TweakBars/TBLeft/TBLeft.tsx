import css from '../../../styles/TweakBar.module.css';
import PopOverPicker from './PopOverPicker/PopOverPicker';
import DropdownMenu from './DropdownMenu/DropdownMenu';

interface IProps {
	size: number;
	setSize: (size: number) => void;
	bgColor: string;
	setBgColor: (bgColor: string) => void;
	fgColor: string;
	setFgColor: (fgColor: string) => void;
	setErrLevel: (errLevel: string) => void;
	setIncludeMargin: (includeMargin: boolean) => void;
}

const TBLeft: React.FunctionComponent<IProps> = ({
	size,
	setSize,
	bgColor,
	setBgColor,
	fgColor,
	setFgColor,
	setErrLevel,
	setIncludeMargin
}) => {
	const handleSizeChange = (imgSize: number) => {
		if (imgSize > 256) setSize(256);
		else if (isNaN(imgSize)) setSize(64);
		else setSize(imgSize);
	};

	return (
		<fieldset className={css.tweakbar_container}>
			<legend>QR settings</legend>
			<div className={css.tweakbar_row}>
				<h3>Size(px)</h3>
				<input
					type="number"
					min="64"
					max="256"
					value={size}
					onChange={(e) => handleSizeChange(parseInt(e.target.value))}
					className={css.input_number}
				/>
			</div>
			<div className={css.tweakbar_row}>
				<h3>Background Color</h3>
				<PopOverPicker color={bgColor} setColor={setBgColor} />
			</div>
			<div className={css.tweakbar_row}>
				<h3>Foreground Color</h3>
				<PopOverPicker color={fgColor} setColor={setFgColor} />
			</div>
			<div className={css.tweakbar_row}>
				<h3>Error Level</h3>
				<DropdownMenu setErrLevel={setErrLevel} />
			</div>
			<div className={css.tweakbar_row}>
				<h3>Include margin</h3>
				<input
					type="checkbox"
					onChange={(e) => setIncludeMargin(e.target.checked)}
				/>
			</div>
		</fieldset>
	);
};

export default TBLeft;
