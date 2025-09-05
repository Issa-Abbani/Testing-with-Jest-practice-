const allFuncs = require("./functions");
const calculator = allFuncs.calculator;

test('adds 1 + 2 to equal 3', () => {
    expect(calculator(1, "+", 2)).toBe(3);
})

test('subtract 5 - 1 equals to 4', () => {
    expect(calculator(5, "-", 1)).toBe(4);
})

test('divide 4 by 2 equals to 2', () => {
    expect(calculator(4, "/", 2)).toBe(2);
})

test('multiply 2 by 2 equals to 4', () => {
    expect(calculator(2, "*", 2)).toBe(4);
})

test('Missing Parameters', () => {
    expect(calculator(1, "+")).toBe("missing parameters");
})

test('Invalid Parameters', () => {
    expect(calculator("Hi", "+", "POTATO")).toBe("Invalid Parameters");
})

test('Invalid Operator', () => {
    expect(calculator(1, "M", 2)).toBe("Invalid Operator");
})