const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool! Please enter your password ", function(input){
	const password = input;
    if (input.length >= 10) {
        console.log("Success! Your password is valid");
    } else if (input.length < 10) {
        console.log("Failure. Your password is not long enough");
    }
    console.log("")
	// This line closes the connection to the command line interface.
	reader.close()

});



