const sumInput = () => {
	const numbers = [];

	while (1) {
		let num = prompt('Введите число', '');
		if (num === '' || num === null || !isFinite(num)) break;
		numbers.push(+num);
	}

	let sum = 0;
	for (let num of numbers) {
		sum += num;
	}

	return sum;
};
