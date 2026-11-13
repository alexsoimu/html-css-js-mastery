const container = document.querySelector(".container");

const numbers = [1, 2, 3, 4];

const number = numbers.map((element, index, arr) => {
  return `
  <p>${element * 2}</p
  `;
});

container.innerHTML = number;
console.log(number);

const people = [
  { name: "Ann", age: 25, budget: 5000 },
  { name: "Mary", age: 32, budget: 4000 },
  { name: "John", age: 23, budget: 6000 },
];

const rezultat = people.map((element) => {
  return element.name;
});

console.log(rezultat);
