const truncate = (str, maxLength) => {
	if (str.length <= maxLength) {
		return str;
	} else {
		return `${str.slice(0, maxLength - 1)}...`;
	}
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Вот, что', 20));
