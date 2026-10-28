const a = 2;
// 1
function test() {
  const x = 20;
  const y = 30;
  const result = (x + y) / a;
  console.log(result);
}

test();

// 2
// number
// string
// boolean true / false
// function

const flow = function () {
  console.log(456);
};

flow();

// 3
const mix = () => {
  console.log(789);
};

mix();
