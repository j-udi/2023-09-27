console.log('my'+ 'cat');
console.log('1' + 2);

console.log("ellie's \n\tbook");

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); //multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or). && (and), ! (not)\
const value1 = false;
const value2 = 4 < 2;

// || (or), tinds the first trthy value
console.log('or: $ {value1 || value2 || check()}');

// && (and), finds the first falsy value
console.log('and: &{value1 && value2 && check()}');

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive);

// === srrict equlity, no type conversion
console.log(stringFive === numberFive);

