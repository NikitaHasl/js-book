const readNumber = () => {
	while (1) {
		const number = prompt('Введите число', '');
		if (isFinite(number)) {
			return +number;
		} else if (number === null || number === '') {
			return null;
		}
	}
};
