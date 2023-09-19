
const isValid = (string) => {

	// Set an object with opening brackets, and their closing match
	const correctBracesObj = {
		"(": ")",
		"{": "}",
		"[": "]"
	};

	const correctIndexs = [];

	// Set the initial return value as true
	let check = true;

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

			if (string[i] === correctBrace) {
				console.log("FOUND YOU!", i);
				correctIndexs.push(i);
				return true;
			}

			if (i === string.length - 1) {
				check = false;
			}
		}
	};

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
};

module.exports = { isValid };


// let check = true;

// const checkNextIndex = (s, si) => {

// 	for (let i = si; i < string.length; i++) {
// 		let innerCheck = false;

// 		console.log("s ===", s);

// 		const correctBrace = correctBraces[s];

// 		console.log("correctBrace ===", correctBrace);

// 		for (let j = si + 1; j <= string.length; j++) {

// 			console.log("string[j] ---", string[j]);

// 			if (string[j] === s) {
// 				check = false;
// 				return false;
// 			}

// 			if (string[j] === correctBrace) {
// 				innerCheck = true;
// 				 break;
// 			}
// 		}

// 		console.log("innerCheck ====", innerCheck);

// 		console.log("i ====", i);
// 		console.log("string.length ====", string.length);

// 		if (i === string.length - 1 && innerCheck === false) {
// 			check = false;
// 		}
// 	}
// };

// if (string.length <= 1) {
// 	return false;
// }

// for (let i = 0; i < string.length - 1; i++) {
// 	checkNextIndex(string[i], i);
// }

// console.log("check ===", string, check);

// return check;