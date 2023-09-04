const { longestConsecutive } = require("./index");

describe("longestConsecutive", () => {

	it("should return the correct answer", () => {

		const input = [9, 8, 7, 6, 5, 100, 200, 4];
		const expectedOutput = 6;

		const value = longestConsecutive(input);

		expect(value).toEqual(expectedOutput);
	});

	it("should return the correct answer with negative numbers", () => {

		const input = [4, 0, -1];
		const expectedOutput = 2;

		const value = longestConsecutive(input);

		expect(value).toEqual(expectedOutput);
	});
});