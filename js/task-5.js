let inputValue = prompt("Введите число");
let check = false;
let total = 0;

do {
  if (inputValue) {
    check = true;
    total += Number(inputValue);
    inputValue = prompt("Введите число");
  } else {
    check = false;
    alert(`Общая сумма чисел равна ${total}`);
  }
} while (check);
