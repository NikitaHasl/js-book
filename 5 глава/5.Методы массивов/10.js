const shuffle = (array) => {
	for (let i = 0; i < array.length - 1; i++) {
		let j = Math.floor(Math.random() * array.length);
		[array[i], array[j]] = [array[j], array[i]];
	}
};
