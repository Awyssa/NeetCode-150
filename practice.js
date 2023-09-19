const correctIndexs = [];

// Set the initial return value as true
let check = true;

const checkForEvenSpace = (a, b) => {

	console.log("checking for even space", a, b);
	const value = b - a - 1;

	console.log("value  ===", value);

	console.log("bool ===", value % 2 === 0);

	return value % 2 === 0;
};

const checkForCorrectBrace = (s, si) => {

	// Id the the correct closing brace
	const correctBrace = correctBracesObj[s];

	console.log("s ===", s);
	console.log("si ===", si);
	console.log("correctBrace ===", correctBrace);

	// Loop through the rest of the string to find the correct closing brace
	for (let i = si + 1; i < string.length; i++) {

		console.log("string i ===", string[i]);

		// If a char is the same opening brace, set check for false and return;
		if (string[i] === s) {
			check = false;
			return false;
		}

		if (string[i] === correctBrace && checkForEvenSpace(si, i)) {
			console.log("FOUND YOU!", i);
			correctIndexs.push(i);
			return true;
		}

		if (i === string.length - 1) {
			check = false;
		}
	}
};

if (string.length <= 1 || string.length % 2 !== 0) {
	return false;
}

// Loop through each char except the last one, and check it has a correct ending brace
for (let i = 0; i < string.length - 1; i++) {

	if (correctIndexs.includes(i))
		continue;

	// If the check has failed, break and return false;
	if (!check)
		break;

	// Check for a correct closing brace
	checkForCorrectBrace(string[i], i);
}

return check;