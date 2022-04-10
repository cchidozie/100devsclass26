//Create a constructor with 4 properties and 3 methods

class PizzaConstructor {
  constructor(size, topping, crust, sauce) {
    this.pizzaSize = size
    this.pizzaTopping = topping
    this.pizzaCrust = crust
    this.sauce = sauce
  }
  displaySize() {
    console.log(`this pizza is a ${this.size} size`)
  }
  displayTopping() {
    console.log(`this pizza is a ${this.pizzaTopping} topping`)
  }
  displaySauce() {
    console.log(`this pizza has ${this.sauce}`)
  }
}

const peperoni = new PizzaConstructor(
  'medium',
  ['peperoni', 'suya'],
  'thick',
  'ginger'
)

PizzaConstructor.prototype.pizzaPrice = 5650

console.log(peperoni.displaySauce)

// function PizzaMachine(size,toppings,crust,sauce){
//     this.size = size
//     this.toppings = toppings
//     this.crust = crust
//     this.sauce = sauce
//     this.estimatedDeliveryTime = function(){
//         console.log('Calculating...')
//     }
//     this.burnMouth = function(){
//         console.log('FJFjfkdjfkjasldkjflkd')
//     }
//     this.frisbee = function(){
//         console.log('YYYyyeeeeetttt')
//     }
// }
// let pizza = new PizzaMachine('large',['spinach','garlic'],'deep dish','white')
