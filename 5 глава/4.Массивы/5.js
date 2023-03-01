const getMaxSubSum = (arr) => {
	let maxSubSum = 0;
	let subSum = 0;

	for (let num of arr) {
		subSum += num;
		maxSubSum = Math.max(maxSubSum, subSum);
		if (subSum < 0) subSum = 0;
	}

	return maxSubSum;
};
