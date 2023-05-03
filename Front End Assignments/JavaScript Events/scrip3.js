3. console.log() is a useful tool for debugging JavaScript code. It allows you to output information to the console, which you can view in the developer tools of your browser. You can use console.log() to print the values of variables, check the flow of your code, and diagnose errors.

Here's an example of using console.log() to debug a function

function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  const result = a + b;
  console.log(`Result is ${result}`);
  return result;
}
