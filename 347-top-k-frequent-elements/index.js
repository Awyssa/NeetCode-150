const topKFrequent = (nums, k) => {
	const obj = {};
	for (let num of nums) {
		if (!obj[num]) {
			obj[num] = [num];
		} else {
			obj[num].push(num);
		}
	}
	const sortedArray = Object.values(obj).sort((a, b) => b.length - a.length);
	const kArray = sortedArray.slice(0, k);
	const removeDupe = new Set(kArray.flat());
	return [...removeDupe];
};