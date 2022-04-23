import { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import useClickOutside from '../../../../hooks/useClickOutside';
import css from '../../../../styles/PopOverPicker.module.css';

interface IProps {
	color: string;
	setColor: (color: string) => void;
}

const PopOverPicker: React.FunctionComponent<IProps> = ({
	color,
	setColor
}) => {
	const popOver = useRef<HTMLDivElement>(null);
	const [isOpen, toggle] = useState<boolean>(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popOver, close);

	return (
		<div className={css.picker}>
			<div
				className={css.swatch}
				style={{ backgroundColor: color }}
				onClick={() => toggle(true)}
			/>
			{isOpen && (
				<div className={css.popover} ref={popOver}>
					<HexColorPicker color={color} onChange={setColor} />
				</div>
			)}
		</div>
	);
};

export default PopOverPicker;
