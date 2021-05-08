
// Assignment code here

var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lower = ["abcdefghijklmnopqrstuvwxyz"]
var char = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"]
var numb = ["1234567890"]
var passwordCheck = ""

function check() {
    var lengthCheck = prompt("How many characters do you want?");
    if (lengthCheck <= 128 && lengthCheck >= 8) {
        alert("Please choose password parameters from the next 4 prompts");
        passLength = parseInt(lengthCheck);

        upperCheck = confirm("Do you want uppercase letters?");

        if (upperCheck) {
            passwordCheck = passwordCheck + upper

        }
        else {
        }

        lowerCheck = confirm("Do you want lowercase letters?");

        if (lowerCheck) {
            passwordCheck = passwordCheck + lower

        } else {
        }

        numbCheck = confirm("Do you want numbers?");

        if (numbCheck) {
            passwordCheck = passwordCheck + numb

        } else {
        }

        charCheck = confirm("Do you want special characters?");

        if (charCheck) {
            passwordCheck = passwordCheck + char

        } else {
        }

    } else if (lengthCheck < 8 || lengthCheck > 128) {

        alert("Password must be between 8 and 128 characters");

        check();
    }
}


/*check();
console.log(passwordCheck);
console.log(parseInt(passLength));
var passEnd = ""*/

function randomGen() {
    check();
    var passwordText = document.querySelector("#password");
    var passEnd = "";
    for (var i = 0; i < passLength; i++) {
        passEnd += passwordCheck[Math.floor(Math.random() * passwordCheck.length)];
    }

    passwordText.value = passEnd;
}
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Add event listener to generate button

generateBtn.addEventListener("click", randomGen);


