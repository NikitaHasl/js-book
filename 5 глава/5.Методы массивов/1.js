const camelize = (str) => {
	const words = str.split('-');
	const capitalizeWords = words.map((word, index) =>
		index === 0 ? word : word[0].toUpperCase() + word.slice(1)
	);

	return capitalizeWords.join('');
};
