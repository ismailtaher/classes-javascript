// Classes Javascript

class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust; // Here we return the value of crust
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust; // here we set the value of crust
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
/* myPizza.type = "supreme"; */ // not desirable to access properties like that
myPizza.setCrust("thin"); // here we set the value of crust to thin using setCrust()
myPizza.bake();
console.log(myPizza.getCrust()); // here we are returning the value of crust using getCrust()
