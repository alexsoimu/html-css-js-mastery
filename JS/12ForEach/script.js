// for(inceput, conditie, pas) {

// }

const container = document.querySelector(".container");

const people = [
  { name: "Ann", age: 25, budget: 5000 },
  { name: "Mary", age: 32, budget: 4000 },
  { name: "John", age: 23, budget: 6000 },
];

people.forEach((element, id, arr) => {
  console.log(id);
  console.log(arr);
  const name = element.name;
  const age = element.age;
  container.innerHTML += `
   <p>${name}: ${age} age.</p>
   `;
});

// for (let i = 0; i < people.length; i++) {
//   const name = people[i].name;
//   const age = people[i].age;
//   const budget = people[i].budget;

//   if (budget > 4000) {
//   container.innerHTML += `
//   <p class="${styleText}">${name}: ${age} age.</p>
//   `;
//   }
// }
