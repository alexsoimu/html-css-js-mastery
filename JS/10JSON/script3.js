// cautarea elementelor in array
const colors = ["white", "black", "green", "red", "yellow"];

// 1 includes
// const result = colors.includes("dark");
// console.log(result);

// if (colors.includes("black")) {
//   console.log("exist");
// } else {
//   console.log("not found");
// }

// 2 find

// const result = colors.find((color) => {
//     return color == "white"
// })

// const result = colors.find((color) => color == "white");
// console.log(result);

// 3 indexOf
// const result = colors.indexOf("blue");
// console.log(result);

// 4 filter
// const result = colors.filter((color) => {
//   return color == "yellow";
// });

const result = colors.filter((color) => color == "yellow");

console.log(result);
