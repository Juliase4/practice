/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
// <!-- ЗАДАЧА 4 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 4</p>
//       <div id="box"></div>
//       <button id="decrease">Зменшити</button>
//       <button id="increase">Збільшити</button>
//     </div>

const btnDecrease = document.querySelector("#decrease");
const btnIncrease = document.querySelector("#increase");
const box = document.querySelector("#box");

btnDecrease.addEventListener("click", onClickDecrease);
btnIncrease.addEventListener("click", onClickIncrease);

let boxWidth = parseInt(getComputedStyle(box).width);
let boxHeight = parseInt(getComputedStyle(box).height);
console.log(boxWidth);

function onClickDecrease() {
  boxWidth -= 10;
  boxHeight -= 10;
  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";
}

function onClickIncrease() {
  boxWidth += 10;
  boxHeight += 10;
  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";
}
