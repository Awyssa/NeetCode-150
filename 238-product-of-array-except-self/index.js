const productExceptSelf = (nums) => {
	const returnArray = nums.map((num, index) => {
		const sum = nums.reduce((a, b, i) => {
			if(i === index)
				return a;
			return a * b;
		}, 1);
		return sum;
	});
	return returnArray;
};