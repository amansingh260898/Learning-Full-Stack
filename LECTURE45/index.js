// sayMyName("Aman");

// function sayMyName(finalName) {
//   console.log(finalName);
// }

// var age = 25;
// console.log(age);

// let age = 25;
// console.log(age);

// sayHello();
// let sayHello = function () {
//   console.log("Hello jee, kaise ho sare");
// };

// const object1 = new Human();
// class Human {}

// function greetMe(greet, fullName) {
//   console.log("Hello", fullName);
//   greet();
// }

// function greet() {
//   console.log("Greeting for the day");
// }
// greetMe(greet, "Aman");

// function solve(number) {
//   return function (number) {
//     return number * number;
//   };
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

// const arr = [
//   function (a, b) {
//     return a + b;
//   },
//   function (a, b) {
//     return a - b;
//   },
//   function (a, b) {
//     return a * b;
//   },
// ];
// let first = arr[2];
// let ans = first(5, 10);
// console.log(ans);

let obj = {
  age: 25,
  wt: 36,
  ht: 180,
  greet: () => {
    console.log("Hello ji");
  },
};
console.log(obj.age);
obj.greet();
