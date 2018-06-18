// Basic structure

// (function(){
//   // Declare private variables and functions

//   return {
//     // Declare public variables and functions
//   }
// })();

// STANDARD MODULE PATTERN
// Create UI controller
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };
//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();  // No access - private function
// // console.log(UICtrl.text); // No access - private variable

// REVEALING MODULE PATTERN
const itemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  return {
    add: add,
    get: get,
  };
})();

itemCtrl.add({ id: 1, name: 'John' });
itemCtrl.add({ id: 2, name: 'Mark' });
console.log(itemCtrl.get(1));
