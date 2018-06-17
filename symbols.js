// Create a symbol
// const sym = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${sym2.toString()}`);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj);

// Symbols are not enumerable in for...in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored JSON.stringify()
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
