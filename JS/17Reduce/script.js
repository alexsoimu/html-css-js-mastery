// const container = document.querySelector(".container")
const numbers = [100, 250, 300, 50, 600]

const number = numbers.reduce((first, last) => {
    return first + last
}, 0)
console.log(number);

const people = [
    { name: "Ann", age: 25, budget: 5000 },
    { name: "Mary", age: 32, budget: 4000 },
    { name: "John", age: 23, budget: 6000 },
]

const summ = people.reduce((first, last) => {
    return first + last.budget
}, 0)

console.log(summ);
