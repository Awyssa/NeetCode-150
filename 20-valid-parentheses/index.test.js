const { isValid } = require("./index");

describe("isValid", () => {
	it("should return true for the string ()", () => {

		const value = isValid("()");

		expect(value).toBe(true);
	});

	it("should return true for the string ()[]{}", () => {

		const value = isValid("()[]{}");

		expect(value).toBe(true);
	});

	it("should return false for the string (]", () => {

		const value = isValid("(]");

		expect(value).toBe(false);
	});

	it("should return true for the string {[]}", () => {

		const value = isValid("{[]}");

		expect(value).toBe(true);
	});

	it("should return false for the string ){", () => {

		const value = isValid("){");

		expect(value).toBe(false);
	});

	it("should return false for the string ([)]", () => {

		const value = isValid("([)]");

		expect(value).toBe(false);
	});

	it("should return false for the string ([]){", () => {

		const value = isValid("([]){");

		expect(value).toBe(false);
	});

	it("should return false for the string ([}}])", () => {

		const value = isValid("([}}])");

		expect(value).toBe(false);
	});
});
