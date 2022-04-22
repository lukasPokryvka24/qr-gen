import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Tweakbars from './components/TweakBars/TweakBars';
import { useState } from 'react';

const App: React.FunctionComponent = () => {
	const [valueToQr, setValueToQr] = useState<string>('');
	return (
		<main className="app-container">
			<Header />
			<Input valueToQr={valueToQr} setValueToQr={setValueToQr} />
			<Tweakbars valueToQr={valueToQr} />
		</main>
	);
};

export default App;
