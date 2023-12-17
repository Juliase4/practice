//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      70 === 01:10

function convertTime(value){
    const hours = String(Math.floor(value / 60)).padStart(2,0)
const minutes= String(value % 60).padStart(2,0)
return `${hours}:${minutes}`
} 

console.log(convertTime(70))
console.log(convertTime(5))



// const hours = String(Math.floor(value / 60)).padStart(2,0)
// const minutes= String(value % 60).padStart(2,0)


// console.log(`${hours}:${minutes}`);


