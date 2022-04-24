interface IProps {
	imgUrl: string;
	setImgUrl: (value: string) => void;
}

const TBRight: React.FunctionComponent<IProps> = ({ imgUrl, setImgUrl }) => {
	return (
		<section>
			<div>
				<h3>Image source</h3>
				<input
					type="text"
					value={imgUrl}
					onChange={(e) => setImgUrl(e.target.value)}
				/>
			</div>
		</section>
	);
};

export default TBRight;
