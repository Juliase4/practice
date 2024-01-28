// <!-- ЗАДАЧА 2 -->
// <div>
//   <p class="taskTitle">ЗАДАЧА 2</p>
//   <button id="swapButton">SWAP ME</button>
//   <input id="leftSwapInput" type="text" value="???" />
//   <input id="rightSwapInput" type="text" value="!!!" />
// </div>

/* Завдання 2 Після натискання кнопки "SWAP ME" здійснюється обмін вмістом
між двома інпутами. Ви можете натиснути на неї кілька разів або вручну
змінити вміст інпутів. */

const refs = {
  inputFist: document.querySelector("#leftSwapInput"),
  inputSecond: document.querySelector("#rightSwapInput"),
  button: document.querySelector("#swapButton"),
};

refs.button.addEventListener("click", onClick);

function onClick() {
  const newValueFist = refs.inputSecond.value;
  const newValueSecond = refs.inputFist.value;
  refs.inputFist.value = newValueFist;
  refs.inputSecond.value = newValueSecond;
}
