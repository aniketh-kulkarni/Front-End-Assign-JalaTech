2. Here's an example of how to invoke a function using call() and apply(), along with an explanation of the difference between them

function sayHello(greeting) {
	console.log(greeting + " " + this.name);
}

var person1 = { name: "Alice" };
var person2 = { name: "Bob" };

sayHello.call(person1, "Hello");  // outputs "Hello Alice"
sayHello.apply(person2, ["Hi"]); // outputs "Hi Bob"
