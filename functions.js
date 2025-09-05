function capitalize(string){
  if (typeof string !== "string") return "Invalid Data Type";
  if(string.length === 0) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string){
  if (typeof string !== "string") return "Invalid Data Type";
  return string.split("").reverse().join("");
}

function calculator(a, operator, b){
  if(a === undefined || b === undefined || operator === undefined) return "missing parameters";
  if (typeof a !== "number" || typeof b !== "number" || typeof operator !== "string") return "Invalid Parameters";
  let total;
  switch(operator){
    case "+": total = a + b;
    break;
    case "-": total = a - b;
    break;
    case "*": total = a * b;
    break;
    case "/": 
    if (b === 0) return "Division by zero not allowed";
    total = a / b;
    break;
    default: return "Invalid Operator"
  }
  return total;
}

function caesarCipher(string, shift) {
  if (typeof string !== "string" || string.length === 0) return undefined;

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let char of string) {
    if (!/[a-z]/i.test(char)) {
      result += char;
      continue;
    }

    const isUpper = char === char.toUpperCase();
    let idx = alphabet.indexOf(char.toLowerCase());

    // Wrap properly using modulo
    let diff = (idx + shift) % alphabet.length;
    if (diff < 0) diff += alphabet.length; // handle negative shifts

    let shifted = alphabet[diff];
    result += isUpper ? shifted.toUpperCase() : shifted;
  }

  return result;
}

function analyzeArray(array) {

    let arrayAverage, arrayMin, arrayMax, arrayLength;

    arrayLength = array.length;

    if(arrayLength === 0){
      return {
        average: 0,
        min: 0,
        max: 0,
        length: 0
      };
    }

    let sum = 0;

    for (let i = 0; i < arrayLength; i++) {
        sum += array[i]; 
    }

    arrayAverage = sum / arrayLength;

    arrayMin = Math.min(...array);
    arrayMax = Math.max(...array);

    return {
        average: arrayAverage,
        min: arrayMin,
        max: arrayMax,
        length: arrayLength
   };
}


module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
};
