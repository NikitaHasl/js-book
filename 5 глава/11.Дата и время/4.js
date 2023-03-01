const getDateAgo = (date, days) => {
	const copyDate = new Date(date);
	copyDate.setDate(copyDate.getDate() - days);
	return copyDate.getDate();
};
