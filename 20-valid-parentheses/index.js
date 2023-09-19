const isValid = (string) => {

	const sLen = string.length;

	if (sLen <= 1 || sLen  % 2 !== 0) {
		return false;
	}

	const stack = [];

	const correctBracesObj = {
		")": "(",
		"}": "{",
		"]": "["
	};

	for (let i = 0; i < sLen; i++) {
		if (correctBracesObj[string[i]]) {
			if (stack.length && stack[stack.length - 1] === correctBracesObj[string[i]]) {
				stack.pop();
			}
			else {
				return false;
			}
		}
		else {
			stack.push(string[i]);
		}
	}
	return !stack.length;
};

module.exports = { isValid };