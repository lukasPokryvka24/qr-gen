// function debounceInput(func, timeout = 300) {
// 	let timer;
// 	return (...args) => {
// 		if (!timer) {
// 			func.apply(this, args);
// 		}
// 		clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			timer = undefined;
// 		}, timeout);
// 	};
// }

function debounceInput(func, timeOut = 300) {
	let timer: number | undefined;
	return (...args) => {
		if (!timer) {
			func.apply(this, args);
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = undefined;
		}, timeOut);
	};
}

export default debounceInput;
