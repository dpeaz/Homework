const pizzaToppings = ["pepperoni", "bacon", "sausage", "ham"];

function greetCustomer() {
  console.log("Welcome to Peaza Pizza, our available toppings are:");
  for (let pizzaTopping of pizzaToppings) console.log(pizzaTopping);
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings} coming right up!`
  );
  const pizzaOrder = [size, crust, toppings];
  return pizzaOrder;
}

function preparePizza(details) {
  const [size, crust, toppings] = details;
  console.log("...cooking pizza...");
  const cookPizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return cookPizza;
}

function servePizza(cookPizza) {
  console.log(
    `Pizza's ready! Here's your ${cookPizza.size} ${
      cookPizza.crust
    } crust pizza with ${cookPizza.toppings.join(", ")}. Enjoy!`
  );
  return cookPizza;
}

greetCustomer();
const customerOrder = getPizzaOrder("Large", "Thin", "Pepperoni", "Sausage");
const finishedPizza = preparePizza(customerOrder);
servePizza(finishedPizza);
