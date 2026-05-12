const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(age) {

  if (age > 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }

  rl.close();
});