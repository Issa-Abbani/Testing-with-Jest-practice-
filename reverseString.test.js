const allFuncs = require("./functions");
const reverseString = allFuncs.reverseString;


test('Check if reverse functionality works normally', ()=>{
  expect(reverseString("HellO")).toBe("OlleH");
})

test('Check if it can handle non-string values well', ()=>{
  expect(reverseString(20)).toBe("Invalid Data Type");
})