// adaugarea elementelor si eliminarea lor
const colors = ["white", "black", "green", "red", "yellow"];

// push (adauga la sfarsit un element)
colors.push("violet");

// unshift (adauga la inceput un element)
colors.unshift("blue");

// shift (elimina un element de la inceput )
colors.shift();

// pop (elimina un element de la sfarsit)
colors.pop();

// splice (elimina elementele dela punctul x)
// const remove = colors.splice(1, 0, "dark");
// console.log(remove);

// slice (copiaza elementele de la punctul x)
// const newArray = colors.slice(2, -1);
// console.log(newArray);

// concat
const first = ["white", "black", "green"];
const second = ["red", "yellow"];

const result = first.concat(second);

// ------------------
console.log(colors);
console.log(result);
