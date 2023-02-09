const {
  checkIfValueIsEven,
  sumArrayValue,
  findValueInArrayOfObject,
} = require("./index");

describe("test for question 1", () => {
  it("2 should return true", () => {
    expect(checkIfValueIsEven(2)).toBeTruthy();
  });

  it("3 should return false", () => {
    expect(checkIfValueIsEven(3)).toBeFalsy();
  });

  it("0 should return true", () => {
    expect(checkIfValueIsEven(0)).toBeTruthy();
  });
});

describe("test for question 2", () => {
  it("should return 6", () => {
    expect(sumArrayValue([1, 2, 3])).toBe(6);
  });

  it("should be defined", () => {
    expect(sumArrayValue([])).toBeDefined();
  });

  it("should return 0", () => {
    expect(sumArrayValue([])).toBe(0);
  });

  it("should throw new Error ", () => {
    expect(() => {
      sumArrayValue([1, 2, 3, "t"]);
    }).toThrow(TypeError);
  });
});

describe("test for question 3", () => {
  let testArrayOfObjects = [
    { name: "john", age: 24 },
    { name: "kim", age: 27 },
    { name: "henry", age: 45 },
    { name: "russle", age: 18 },
    { name: "joe", age: 40 },
  ];

  it("should return 24", () => {
    expect(findValueInArrayOfObject(testArrayOfObjects, "age", 24)).toBe(24);
  });

  it("should return kim", () => {
    expect(findValueInArrayOfObject(testArrayOfObjects, "name", "kim")).toBe(
      "kim"
    );
  });

  it("should return null", () => {
    expect(findValueInArrayOfObject(testArrayOfObjects, "name", "jim")).toBe(
      null
    );
  });
});
