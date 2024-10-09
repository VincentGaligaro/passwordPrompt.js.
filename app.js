// Define the correct password
const correctPassword = "securePassword123";

// Variable to store the user's password
let userPassword = "";

// Do-while loop to prompt the user until the correct password is entered
do {
    userPassword = prompt("Please enter your password:");
    
    // Check if the password is correct
    if (userPassword !== correctPassword) {
        console.log("Incorrect password. Please try again.");
    }
} while (userPassword !== correctPassword);

// Log success message when the correct password is entered
console.log("Success! You have entered the correct password.");
