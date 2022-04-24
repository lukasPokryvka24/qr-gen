import css from '../../../styles/Tweakbar.module.css';
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
}

const TBLeft: React.FunctionComponent<IProps> = ({
	size,
	setSize,
	bgColor,
	setBgColor,
	fgColor,
	setFgColor,
	setErrLevel
}) => {
	return (
		<section className={css.tweakbar_container}>
			<div className={css.tweakbar_row}>
				<h3>Size(px)</h3>
				<input
					type="number"
					min="64"
					max="256"
					value={size}
					onChange={(e) => setSize(parseInt(e.target.value))}
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
		</section>
	);
};

export default TBLeft;
