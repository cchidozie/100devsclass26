//Create a pizza object that has four properties and three methods

let pizza = {
  pizzaName: 'peperoni',
  pizzaTopping: 'Suya',
  pizzaPrice: 5560.0,
  pizzaCheese: false,

  pizzaCheckout: function () {
    console.log(`Your pizza costs ${pizza.pizzaPrice}`)
  },
  pizzaDesc: function () {
    console.log(`Your pizza type is ${pizza.pizzaName}`)
  },
  pizzaSafety: function () {
    console.log(`Does my pizza have cheese? = ${pizza.pizza}`)
  },
}

console.log(pizza.pizzaCheese);