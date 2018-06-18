// SETS - store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);

// console.log(set1);

// const set2 = new Set([1, false, 'string', { age: 24 }]);
// console.log(set2);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has('A string'));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: 'John' })); //false

// Delete from set
// set1.delete(100);
// console.log(set1);

// Iterating through sets

// For...of
// for (let item of set1) {
//   console.log(item);
// }

// ForEach loop
// set1.forEach(function(value) {
//   console.log(value);
// });

// Convert sets to array
const setArr = Array.from(set1);
console.log(setArr);
