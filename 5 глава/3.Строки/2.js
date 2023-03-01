const checkSpam = (str) => {
	checkStr = str.toLowerCase();
	if (checkStr.includes('xxx') || checkStr.includes('viagra')) {
		return true;
	} else {
		return false;
	}
};
