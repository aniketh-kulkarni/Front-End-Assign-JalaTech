5. Here's an example of adding properties to an existing function using object prototypes in JavaScript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a method to the Person prototype
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// Add a property to the Person prototype
Person.prototype.species = "Human";

// Create some Person objects and test the properties and methods
var person1 = new Person("Alice", "Smith");
console.log(person1.fullName()); // outputs "Alice Smith"
console.log(person1.species);   // outputs "Human"

var person2 = new Person("Bob", "Johnson");
console.log(person2.fullName()); // outputs "Bob Johnson"
console.log(person2.species);   // outputs "Human"
