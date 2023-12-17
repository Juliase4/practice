//  *? Напишіть цикл, який виводить у консоль
//   *? усіх парних чисел від min до max

const max = 50;
const min = 23;
let total =0;

for (let i=max; i>=min; i--){
 if(i %2 ===0){

    total +=i;
 };   

}

console.log(total);