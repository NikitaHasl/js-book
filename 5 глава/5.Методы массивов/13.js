const groupById = (arr) => {
	const result = {};

	arr.map((elem) => (result[elem.id] = elem));

	return result;
};
