const box = document.querySelector(".container");
console.log(box);

const child = "First";

const list = `
<ul class="list_item">
   <li>${child}</li>
   <li>Second</li>
   <li>Third</li>
</ul>
`;

box.innerHTML = list;

box.classList.add("second")
// box.className = "second";
