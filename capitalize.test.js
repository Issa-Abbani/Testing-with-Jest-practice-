const allFuncs = require("./functions");
const capitalize = allFuncs.capitalize;

test('Check main capitalize functionality', ()=>{
  expect(capitalize("heLlo")).toBe("Hello");
})

test('Check if it can handle non-string values well', ()=>{
  expect(capitalize(20)).toBe("Invalid Data Type");
})
