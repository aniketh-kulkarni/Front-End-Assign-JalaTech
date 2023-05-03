5. Here's an example of creating a JSON object and accessing it using dot notation

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  phoneNumbers: ['555-1234', '555-5678']
};

console.log(person.firstName); // Output: "John"
console.log(person.address.city); // Output: "Anytown"
console.log(person.phoneNumbers[1]); // Output: "555-5678"
