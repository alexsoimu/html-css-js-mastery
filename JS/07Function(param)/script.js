// function mix(price, discout) {
//   console.log(price - (price * discout) / 100);
// }

// mix(200, 10);
// mix(300, 15);
// mix(150, 50);

// ---------------------------------------
// function mix(price, discout) {
//   return price - (price * discout) / 100;
// }

// console.log(mix(200, 10));
// console.log(mix(300, 15));
// console.log(mix(150, 50));

// ---------------------------------------

const mix = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log(mix(200, 10));
