// definition of function
// function sayMyName() {
//   console.log("Aman singh");
// }
// // function use - function call
// sayMyName();

// function printCounting() {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }
// printCounting();

// function printNumber(num) {
//   console.log("Printing Number : ", num);
// }
// printNumber(5);

// function getAvg(n1, n2) {
//   let avg = (n1 + n2) / 2;
//   console.log("Average: ", avg);
// }

// getAvg(3, 70);

// return function

// function getSum(a, b, c) {
//   let sum = a + b + c;
//   return sum;
// }
// let ans = getSum(1, 2, 3);
// console.log("Printing sum:", ans);

// function getMyName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;
//   return fullName;
// }

// let fullName = getMyName("Aman", "Singh");
// console.log("Full Name: ", fullName);

// function getmultiply(a, b) {
//   return a * b;
// }

// console.log(getmultiply(2, 10));

// const getmultiply = function (a, b) {
//   return a * b;
// };
// let ans = getmultiply(2, 20);
// console.log(ans);

// arrow function

let getExp = (x, y) => {
  let ans = x ** y;
  return ans;
};
console.log(getExp(2, 10));
