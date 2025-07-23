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