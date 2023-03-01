const isEmpty = (obj) => {
	let empty = true;
	for (key in obj) {
		empty = false;
	}
	return empty;
};
