const { sum } = require("./unit");

describe("#sum of 2 numbers", () => {
  test("adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("adds 1 + 2 not to equal 4", () => {
    const result = sum(1, 2);
    expect(result).not.toBe(4);
  });
});

describe("#adding something to an object", () => {
  test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

describe("#Truthiness", () => {
  test("test null as a variable", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test("test zero as a varible ", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

describe("#test numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2.2;
    expect(value).toBe(4.2);
    expect(value).toEqual(4.2);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeCloseTo(4.200391);
  });
});

describe("#test strings", () => {
  test('there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

describe("# test in an array", () => {
  test("the shopping list has milk on it", () => {
    // expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
