const pizzaToppings = ["pepperoni", "bacon", "sausage", "ham"];

function greetCustomer() {
  console.log("Welcome to Peaza Pizza, our available toppings are:");
  for (let pizzaTopping of pizzaToppings)
  console.log(pizzaTopping);
};


function getPizzaOrder(size, crust, ...toppings) {
  console.log("One " + size + crust + " crust pizza with " + toppings + " coming right up!");
  const pizzaOrder = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaOrder
};


function preparePizza(details) {
  const [size, crust, toppings] = details;
  console.log("...cooking pizza...");
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
return pizza
};


function servePizza()
