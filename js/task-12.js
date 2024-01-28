/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// <!-- ЗАДАЧА 3 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 3</p>
//       <input id="passwordInput" type="text" />
//       <button id="passwordButton">Приховати</button>
//     </div>

const inputEl = document.querySelector("#passwordInput");
const btnEl = document.querySelector("#passwordButton");

btnEl.addEventListener("click", onClick);

function onClick() {
  const typeEl = inputEl.getAttribute("type");
  if (typeEl === "text") {
    inputEl.setAttribute("type", "password");
    btnEl.textContent = "Розкрити";
  } else {
    inputEl.setAttribute("type", "text");
    btnEl.textContent = "Приховати";
  }
}
