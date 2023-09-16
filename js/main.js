// Classes Javascript

/* class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust; // Here we return the value of crust
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust; // here we set the value of crust
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(toppings) {
    this.toppings.push(toppings);
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings[0]} and ${this.toppings[1]}`
    );
  }
}

const myPizza = new Pizza("pepperoni", "small");
/* myPizza.type = "supreme"; */ // not desirable to access properties like that
/* myPizza.setCrust("thin"); */ // here we set the value of crust to thin using setCrust()
/* myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.getToppings()); */ // here we are returning the value of crust using getCrust()

// Super Classes and Sub Classes

class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust; // Here we return the value of crust
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust; // here we set the value of crust
  }
}

``;
