const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator tool! Please enter your password ", function(input){
	const password = input.split("");
    let trueFalse = false;
    if (password.length >= 10 && checkUpperCase() === true) {
        console.log("Success! Your password is valid");
    } else if (password.length < 10 && checkUpperCase() === true) {
        console.log("Invalid. You have an uppercase letter but your password must be at least 10 characters");
    } else if (password.length >= 10 && checkUpperCase() === false) {
        console.log("Invalid. Your password is long enough but you need to have at least one uppercase letter");
    } else if (password.length < 10 && checkUpperCase() === false) {
        console.log("Invalid. Your password must be at least 10 characters and include at least one uppercase letter");
    }
    function checkUpperCase() {
        for (i = 0; i < password.length; i++) {
            let upCase = password[i];
            if (upCase.toUpperCase() === upCase && upCase !== upCase.toLowerCase()) {
                trueFalse = true;
                i = password.length + 1; 
            } else {
                trueFalse = false;
            }
        }
            return trueFalse;
        }
	// This line closes the connection to the command line interface.
	reader.close()

});

// let test = ['D', 'a', 'l', 'l', 'a', 's', ' ', 'M', 'a', 'y', '?'];


// let upCase = test[10];
// console.log(upCase);
// console.log(upCase.toLowerCase() !== upCase);

// for (i = 0; i < test.length; i++) {
//     let upCase = test[i];
//     if (upCase.toUpperCase() === upCase && upCase !== upCase.toLowerCase()) {
//         console.log(upCase);
//         console.log("This letter is uppercase");
//     } else {
//         console.log(test[i]);
//         console.log("This letter is not uppercase");
//     }
// }



// function checkUpperCase() {
//     for (i = 0; i < password.length; i++) {
//         let upCase = password[i];
//         if (upCase.toUpperCase() === upCase && upCase !== upCase.toLowerCase()) {
//             trueFalse = true; 
//         } else {
//             trueFalse = false;
//         }
//     }
//         return trueFalse;
//     }

// let password = ['H', 'e', ]



