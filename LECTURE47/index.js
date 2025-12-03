class Human {
  // properties
  age; // public
  #wt = 80; // private
  ht = 180;

  constructor(newAge, newHeight, newWeight) {
    this.age = newAge;
    this.ht = newHeight;
    this.#wt = newWeight;
  }

  // behaviour

  walking() {
    console.log("I am walking", this.#wt);
  }
  running() {
    console.log("I am runnig");
  }
  get fetchWeight() {
    return this.#wt;
  }
  set modifyWeight(val) {
    this.#wt = val;
  }
}

let obj = new Human(50, 190, 101);
console.log(obj.fetchWeight);
// console.log(obj.#wt);

obj.walking();
