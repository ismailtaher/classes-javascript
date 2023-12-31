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

/* class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
} */

/* class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this._type = "The Works";
  }
  slice() {
    console.log(`Our ${this._type} ${this._size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialtyPizza("Medium");
mySpecialty.slice();
 */

// Factory Functions and using them to make the properties of our classes truly private

/* function pizzaFactoy(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`baking a ${size} ${crust} crust pizza`),
  };
}

const myPizza = pizzaFactoy("small");
myPizza.bake();
 */

// Public & Private Fields in Classes

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const myPizza = new Pizza("small");
myPizza.hereYouGo();
console.log(myPizza.size); // will be undefined as size is now a private field
