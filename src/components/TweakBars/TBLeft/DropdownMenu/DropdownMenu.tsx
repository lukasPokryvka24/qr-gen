import { useState } from 'react';

interface IProps {
	setErrLevel: (errLevel: string) => void;
}

const DropdownMenu: React.FunctionComponent<IProps> = ({ setErrLevel }) => {
	const [errorLevel, setErrorLevel] = useState<string>('');

	const handleErrorLevelChange = (value: string): void => {
		switch (value) {
			case 'Medium':
				setErrorLevel('Medium');
				setErrLevel('M');
				break;
			case 'Quartile':
				setErrorLevel('Quartile');
				setErrLevel('Q');
				break;
			case 'High':
				setErrorLevel('High');
				setErrLevel('H');
				break;
			default:
				setErrorLevel('Low');
				setErrLevel('L');
				break;
		}
	};

	return (
		<select
			name="errorLevel"
			value={errorLevel}
			onChange={(event) => handleErrorLevelChange(event.target.value)}
		>
			<option id="0">Low</option>
			<option id="1">Medium</option>
			<option id="2">Quartile</option>
			<option id="3">High</option>
		</select>
	);
};

export default DropdownMenu;
