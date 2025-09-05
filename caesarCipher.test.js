const allFuncs = require("./functions");
const caesarCipher = allFuncs.caesarCipher;

test('Basic Functionality Check for Cipher', ()=>{
  expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('Wrong type parameter', ()=>{
  expect(caesarCipher(10 , 3)).toBeUndefined();
})

test('Dealing with spaces, special characters...', ()=>{
  expect(caesarCipher("x*y z", 3)).toBe("a*b c");
})
