const { productExceptSelf } = require("./productExceptSelf");

describe("productExceptSelf", () => {
	it("should return correct products for a given array", () => {
		const input = [1, 2, 3, 4];
		const expectedOutput = [24, 12, 8, 6];

		expect(productExceptSelf(input)).toEqual(expectedOutput);
	});
});
