const allFuncs = require("./functions");
const analyzeArray = allFuncs.analyzeArray;

test('returns values', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});


test('dealing with empty arrays', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    });
});