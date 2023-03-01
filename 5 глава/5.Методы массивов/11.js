const getAverageAge = (users) => {
	return users.reduce((sum, cur) => cur.age + sum, 0) / users.length;
};
