// for(let example of array) {

// }

const container = document.querySelector(".container");

const people = [
  { name: "Ann", age: 25, budget: 5000 },
  { name: "Mary", age: 32, budget: 4000 },
  { name: "John", age: 23, budget: 6000 },
];

let step = 0;
for (let user of people) {
  step++;
  if (step > 1) {
    console.log(user.name);
  }
  //   console.log(step);
}
