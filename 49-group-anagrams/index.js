const groupAnagrams = (words) => {
	
	let returnArray = [];
	
	for(let i = 0; i < words.length; i++) {
		const currentWord = words[i].split("").sort().join("");
		let loopArray = [words[i]];
		
		for(let j = 0; j < words.length; j++) {
			const compareWord = words[j].split("").sort().join("");
			
			if(currentWord === compareWord && i !== j)
			{
				loopArray.push(words[j]);
				words.splice(j, 1);
			}
		}
		
		returnArray.push(loopArray.sort());
	}
	
	return returnArray;
};


const value = groupAnagrams(["","",""]);

const answer = [["","",""]];

console.log(value);
console.log(answer);

console.log("Did we get it correct? ", value == answer);