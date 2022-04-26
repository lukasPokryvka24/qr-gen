interface IProps {
	imgUrl: string;
	setImgUrl: (value: string) => void;
	imgWidth: number;
	setImgWidth: (value: number) => void;
	imgHeight: number;
	setImgHeight: (value: number) => void;
	centerImg: boolean;
	setCenterImg: (value: boolean) => void;
	imgX: number | undefined;
	setImgX: (value: number) => void;
	imgY: number | undefined;
	setImgY: (value: number) => void;
}

const TBRight: React.FunctionComponent<IProps> = ({
	imgUrl,
	setImgUrl,
	imgWidth,
	setImgWidth,
	imgHeight,
	setImgHeight,
	centerImg,
	setCenterImg,
	imgX,
	setImgX,
	imgY,
	setImgY
}) => {
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
			<div>
				<h3>Image width</h3>
				<input
					type="number"
					value={imgWidth}
					min={0}
					max={100}
					onChange={(e) => setImgWidth(parseInt(e.target.value))}
				/>
			</div>
			<div>
				<h3>Image height</h3>
				<input
					type="number"
					value={imgHeight}
					min={0}
					max={100}
					onChange={(e) => setImgHeight(parseInt(e.target.value))}
				/>
			</div>
			<div>
				<h3>Center image</h3>
				<input
					type="checkbox"
					checked={centerImg}
					onChange={(e) => setCenterImg(e.target.checked)}
				/>
			</div>
			<div>
				<h3>Image X: {imgX}</h3>
				<input
					type="range"
					value={imgX}
					min={0}
					max={100}
					onChange={(e) => setImgX(parseInt(e.target.value))}
					disabled={centerImg}
				/>
			</div>
			<div>
				<h3>Image Y: {imgY}</h3>
				<input
					type="range"
					value={imgY}
					min={0}
					max={100}
					onChange={(e) => setImgY(parseInt(e.target.value))}
					disabled={centerImg}
				/>
			</div>
		</section>
	);
};

export default TBRight;
