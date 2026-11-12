const container = document.querySelector(".container");

const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (const key in person) {
  // console.log(key);
  // console.log(person[key]);

  container.innerHTML += `
    <p>${key}: ${person[key]}</p>
    `;
}
