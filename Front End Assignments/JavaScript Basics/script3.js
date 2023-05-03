3. FOR/IN Loop Program

let person = {
  firstname: "John",
  lastname: "Doe",
  age: 30
};

for (let property in person) {
  console.log(property + ": " + person[property]);
}
