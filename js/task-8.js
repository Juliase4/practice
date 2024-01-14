// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];


const discount = fruits.map((fruit) => {

    const percent = fruit.price * 0.8;
    const id = Math.floor(Math.random()*100)+Math.floor(Math.random()*100);
    return { ...fruit, price: percent, id}
})

console.log(discount);