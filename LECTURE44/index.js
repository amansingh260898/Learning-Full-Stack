// let obj = {
//   love: "Love",
//   age: 22,
//   weight: 70,
//   height: "6ft 1in",
//   greet: function () {
//     console.log("hello je kaise o sa saare");
//   },
// };

// console.log(obj);
// obj.greet();

// console.log(typeof obj);

// let obj2 = obj;

// ARRAY CREATION

// let arr = [1, 2, 3, 4, 5];
// array constructor
// let brr = new Array("love", 100, true);

// console.log(brr[0]);

// brr.push("Babbar");
// brr.pop();

// brr.shift();
// brr.unshift("aman");
// brr.push(20);
// brr.push(40);
// brr.push(70);

// console.log(brr.slice(2, 4));

// brr.splice(1, 0, "kunal");
// console.log(brr);

// MAP

// let arr = [10, 20, 30];

// arr.map((number, index) => {
//   console.log(number + 1);
//   console.log(index);
// });

// let ansArray = arr.map((number) => {
//   return number * number;
// });
// console.log(ansArray);

// filter

// let arr = [10, 20, 30, 11, 21, 44, 51];

// let evenArray = arr.filter((number) => {
//   return number % 2 == 0;

//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(evenArray);

// let arr = [1, 2, "love", "kunal", null];

// let ans = arr.filter((value) => {
//   if (typeof value == "string") {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans);

// REDUCE

// let arr = [10, 20, 30, 40];

// let ans = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(ans);

// SORT

// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();
// console.log(arr);

// indexof

// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(9));

// find

// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();
// console.log(arr);

// console.log(arr.find[3]);

// fotr each loop

// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("length: ", length);

// traditional loop

// for (let index = 0; index < length; index++) {
//   console.log(arr[index]);
// }
// arr.forEach((value, index) => {
//   console.log("Number: ", value, "Index", index);
// });

// for in

// let obj = {
//   name: "Love",
//   age: 22,
//   weight: 70,
//   height: "6ft 1in",
//   greet: function () {
//     console.log("hello je kaise o sa saare");
//   },
// };
// for (let key in obj) {
//   console.log(key, " ", obj[key]);
// }

// for of

// let arr = [10, 20, 30, 40];

// for (let value of arr) {
//   console.log(value);
// }

// let fullname = "Aman";

// for (let val of fullname) {
//   console.log(val);
// }

// Array with function

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//   let len = arr.length;
//   let sum = 0;
//   for (let index = 0; index < len; index++) {
//     sum = sum + arr[index];
//   }
//   return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

let arr = [10, 20, 30, 40, 50];

function getSum(arr) {
  let sum = 0;
  arr.forEach((value) => {
    sum = sum + value;
  });
  return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);
