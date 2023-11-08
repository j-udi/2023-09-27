'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎' , '🍌'];
console.log(fruits);
console.log(fruits.langth);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.langth - 1]);

console.clear();
// 3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i< fruits.langth; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c.forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push ('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

//shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1,1,'🍏', '🍉');
console.log(fruits);

//combin two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
 //5. Searching
 //fine the index
 console.clear();
 console.log(fruits);
 console.log(fruits.indexOf('🍎'));
 console.log(fruits.indexOf('🍉'));
 console.log(fruits.includes('🍉'));
 console.log(fruits.includes('🥥'));
 console.log(fruits.indexOf('🥥'));

 //includes
 console.log(fruits.includes('🍉'));
 console.log(fruits.includes('🥥'));

 //lastIndexOf
 console.clear();
 fruits.push('🍎')
 console.log(fruits);
 console.log(fruits.indexOf('🍎'));
 console.log(fruits.lastIndexOf('🍎'));

{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

//Q2. make an array out of a string
{
    const fruits = '/사과, /키위, /바나나, /체리';
    const result = fruits.split(',');
    console.log(result);
}

