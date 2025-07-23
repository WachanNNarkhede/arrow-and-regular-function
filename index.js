//hello
const obj = {
  value: 42,
  func: function() {
    console.log(this.value); // 42
  }
};
obj.func();
//Regular Function: Has its own this, which depends on how the function is called (e.g., global object, object method, or explicit binding with call/apply)

const obj1 = {
  value: 42,
  func: () => {
    console.log(this.value); // undefined
  }
};
obj1.func();
// arrow Inherits this from the surrounding lexical scope (no own this). Useful in callbacks where you want to retain the outer this.

// Regular Function: Has an arguments object containing all passed arguments.

function myFunction() {
  console.log(arguments); // [1, 2, 3]
}
myFunction(1, 2, 3);

//Arrow Function: No arguments object. Use rest parameters (...args) instead.
const myFunction = (...args) => {
  console.log(args); // [1, 2, 3]
};