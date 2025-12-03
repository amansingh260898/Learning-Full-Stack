function getAge() {
  return 190;
}
function utility(name = "Aman", age = getAge()) {
  console.log(name, " ", age);
}
utility();

// function solve(value = { age: 15, wt: 90, ht: 190 }) {
//   console.log("HELLO JII -> ", value);
// }
// solve(null);

// function sayName(fName, lName) {
//   console.log("My Name is:", fName, " ", lName);
// }

// sayName("Rohit");
