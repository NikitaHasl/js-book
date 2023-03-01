const aclean = (arr) => {
	const map = new Map();

	for (let word of arr) {
		let key = word.toLowerCase().split('').sort().join('');
		map.set(key, word);
	}

	return Array.from(map.values());
};
