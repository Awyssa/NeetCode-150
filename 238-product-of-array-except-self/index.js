const productExceptSelf = (nums) => {
	const returnArray = [];
	for(let i = 0; i < nums.length; i++) {
		const sum = nums.reduce((a, b, index) => {
			if(i === index)
				return a;
			return a * b;
		}, 1);
		returnArray.push(sum);
	}
	return returnArray;
};