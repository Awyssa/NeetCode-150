// const groupAnagrams = (words) => {
// 	let returnArray = {};
// 	for(let i = 0; i < words.length; i++) {
// 		const currentWord = words[i].split("").sort().join("");
// 		for(let j = 0; j < words.length; j++) {
// 			const compareWord = words[j].split("").sort().join("");
// 			if(currentWord === compareWord && i !== j)
// 			{
// 				loopArray.push(words[j]);
// 				words.splice(j, 1);
// 			}
// 		}
// 		returnArray.push(loopArray);
// 	}
// 	return returnArray;
// };

const groupAnagrams = (words) => {
	let returnObject = {};
	for (let word of words) {
		const sortedWord = word.split("").sort().join("");
		if (!returnObject[sortedWord])
			returnObject[sortedWord] = [word];
		else
			returnObject[sortedWord].push(word);
	}
	return Object.values(returnObject);
};

const value = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
const answer = [[["bat"],["nat","tan"],["ate","eat","tea"]]];

console.log(value);
console.log(answer);

console.log("Did we get it correct? ", value === answer);