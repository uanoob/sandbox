// Iterator example
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];

// // Initials iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next().value);
// console.log(names.next());
// console.log(names.next());

// Generator example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// ID Creator
function* createIds() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
