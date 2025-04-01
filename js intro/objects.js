// Defining an object named 'car' using object literal syntax
var car = {
  model: "i10", // Property: Model name of the car
  brand: "ford", // Property: Brand of the car
  colors: ["red", "yellow"], // Property: An array containing available colors of the car
  start: function () {
    // Method: A function that starts the car and logs a message
    console.log(this.model, "Started"); // 'this' refers to the 'car' object
  },
};

// Printing the car object to the console
console.log(car);

// Calling the start method of the car object
car.start();

// Adding a new property 'mileage' to the car object dynamically
car.mileage = "10 /kmpl";
console.log(car); // Printing the updated car object

// -----------------------------------------------

// Function constructor to create Car objects
function Car(model, brand, colors, mileage) {
  console.log(this); // Initially, 'this' refers to an empty object {}

  // Assigning properties to the new object being created
  this.model = model;
  this.brand = brand;
  this.color = colors;
  this.mileage = mileage;

  console.log(this); // Printing the object after assigning properties

  function start() {
    // This function is defined inside the constructor, but does not work as expected
    console.log(`${this.model} started`); // 'this' here does not refer to the Car object, leading to issues
  }
}

// Creating a new object using the Car constructor function
var figo = new Car("figo", "ford", ["red", "grey"], "15 kmpl");
console.log(figo); // Printing the created Car object

// -----------------------------------------------

// Defining a Car class (ES6 syntax)
class Car {
  // Properties of the Car class
  model = "i10"; // Default value
  brand = "ford"; // Default value
  year = 2018; // Default value
  colors = ["red", "grey"]; // Default array of colors

  // Method to display car information
  info() {
    console.log(`${this.model} by ${this.brand} produced in year ${this.year}`);
  }
}

// Creating two instances (objects) of the Car class
var i10 = new Car();
console.log(i10); // Printing the i10 object

var i20 = new Car();
console.log(i20); // Printing the i20 object

// -----------------------------------------------

// Another Car class implementation with a method to set values
class Car {
  // Method to assign values dynamically instead of using a constructor
  collectValues(model, brand, year, colors) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.colors = colors;
  }

  // Method to display car details
  info() {
    console.log(`${this.model} by ${this.brand} produced in year ${this.year}`);
  }
}

// Creating two Car objects
var i10 = new Car();
i10.collectValues("i10", "Hyundai", 2018, ["red", "black"]); // Assigning values using collectValues method

var i20 = new Car();
i20.collectValues("i20", "Hyundai", 2020, ["red", "grey"]); // Assigning values using collectValues method

// Calling the info method to display details of each car
i10.info();
i20.info();

// -----------------------------------------------

// Best approach: Using a constructor inside the class
class Car {
  // Constructor function initializes the object with given values
  constructor(model, brand, year, colors) {
    this.model = model; // Assigning model
    this.brand = brand; // Assigning brand
    this.year = year; // Assigning year
    this.colors = colors; // Assigning available colors
  }

  // Method to display information about the car
  info() {
    console.log(`${this.model} by ${this.brand} produced in year ${this.year}`);
  }
}

// Creating objects using the Car class with the constructor
var i10 = new Car("i10", "Hyundai", 2018, ["red", "black"]);
var i20 = new Car("i20", "Hyundai", 2020, ["red", "grey"]);

// Calling the info method to display car details
i10.info();
i20.info();
