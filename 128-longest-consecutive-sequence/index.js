const loopThroughArray = (num, array) => {
	const nextNum = array.includes(num);
	return nextNum || false;
};

const longestConsecutive = (nums) => {
	if (!nums.length) {
		return 0;
	}

	const obj = {};

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]]) {
			continue;
		}

		obj[nums[i]] = [nums[i]];

		let count = i;
		let nextNumber = nums[count] + 1;

		while (loopThroughArray(nextNumber, nums)) {
			obj[nums[i]].push(nextNumber);
			count ++;
			nextNumber ++;
		}
	}

	const objValues = Object.values(obj);

	const longestValue =  objValues.reduce((current, acc) => {
		if (current.length > acc.length)
			return current;
		else
			return acc;

	}, []);

	const answer = longestValue?.length || 0;

	return answer;
};

module.exports = { longestConsecutive };