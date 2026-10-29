const btn = document.querySelector(".btn");
const firstInput = document.querySelector(".first_input");
const secondInput = document.querySelector(".second_input");
const show = document.querySelector(".show");

btn.addEventListener("click", checked);

// function checked() {
//   const result = text.value;
//   show.innerHTML = result
//   if (result.includes("#") || result.includes("*")) {
//     show.innerHTML = "contine un simbol incorect";
//   } else {
//     show.innerHTML = "nu contine un simbol incorect";
//   }
// }
// != "" - Contine sau nu ceva

function checked() {
  const firstResult = Number(firstInput.value);
  const secondResult = Number(secondInput.value);
  const result = firstResult + secondResult;
  // console.log(result);
    show.innerHTML = result
}
