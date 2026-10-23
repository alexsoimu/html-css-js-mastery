// < > >= <= == != ===

let x = 10;
let y = 20;

if (x === y) {
  console.log("Hello");
} else {
  console.log("false");
}

alert("Hello JavaScript");
prompt("Introdu o cifra");

// Ex 1
let pass = prompt("Introduceti o parola: ");

if (pass === "qwerty") {
  console.log("Bine ati venit!");
} else {
  console.log("N-a mers...");
}

// Ex 2
const password = prompt("Introdu parola: ");
const confirmPassword = prompt("Introduceti parola din nou: ");

if (password === confirmPassword) {
  console.log("Parola este setata");
} else {
  console.log("Parolele nu sunt egale");
}

// Ex 3
const temp = prompt("Introduceti temperatura: ");

if (temp > 15) {
  console.log("Caldura");
} else if (temp < 5) {
  console.log("Rece");
} else {
  console.log("Normal");
}
