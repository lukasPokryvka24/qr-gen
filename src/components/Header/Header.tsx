import css from '../../styles/Header.module.css';

const Header: React.FunctionComponent = () => {
	return (
		<div className={css.header_container}>
			<h1 className={css.header_logo}>
				<span>QR</span>gen
			</h1>
		</div>
	);
};

export default Header;
