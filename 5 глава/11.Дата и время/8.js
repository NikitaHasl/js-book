const formatDate = (date) => {
	const diffMs = new Date() - date;

	if (diffMs < 1000) return 'прямо сейчас';

	const sec = Math.floor(diffMs / 1000);
	if (sec < 60) return `${sec} сек. назад`;

	const minutes = Math.floor(diffMs / 60000);
	if (minutes < 60) return `${minutes} мин. назад`;

	dateElem = [
		'0' + date.getDate(),
		'0' + (date.getMonth() + 1),
		`${date.getFullYear()}`,
		'0' + date.getHours(),
		'0' + date.getMinutes(),
	].map((el) => el.slice(-2));

	return `${dateElem.slice(0, 3).join('.')} ${dateElem.slice(3).join(':')}`;
};
