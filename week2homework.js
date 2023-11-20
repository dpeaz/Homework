let pizzaPlace = "PeazA Place";
let numberOfToppings = 7;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);

let finestPizza = `Derek Pease's "${pizzaPlace}" is one of the finest in the country, offering ${numberOfToppings} toppings!`;

console.log(finestPizza);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
