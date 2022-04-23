import { useEffect } from 'react';

const useClickOutside = (ref: any, handler: (event: MouseEvent) => void) => {
	useEffect(() => {
		let startedInside = false;
		let startedWhenMounted = false;

		const listener = (event: MouseEvent): void => {
			if (startedInside || !startedWhenMounted) return;
			if (!ref.current || ref.current.contains(event.target as Node)) return;

			handler(event);
		};

		const validateEventStart = (event: MouseEvent | TouchEvent): void => {
			startedWhenMounted = ref.current;
			startedInside = ref.current && ref.current.contains(event.target as Node);
		};

		document.addEventListener('mousedown', validateEventStart);
		document.addEventListener('touchstart', validateEventStart);
		document.addEventListener('click', listener);

		return () => {
			document.removeEventListener('mousedown', validateEventStart);
			document.removeEventListener('touchstart', validateEventStart);
			document.removeEventListener('click', listener);
		};
	}, [ref, handler]);
};

export default useClickOutside;
