// Variable assignments

var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lower = ["abcdefghijklmnopqrstuvwxyz"]
var numb = ["1234567890"]
var char = ["±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠"]
var passwordCheck = ""

//function code -- checkPassword() to confirm password meets assignment requirements
// 1. prompt to confirm length meets requirements
// 2. if yes, then prompts for remaining pw options
// 3. if user selects pw that's too short/long, 'else if' alert to correct

function checkPassword() {
    var checkLength = prompt("How many characters do you want?");
    if (checkLength <= 128 && checkLength >= 8) {
        alert("Please select OK or CANCEL in the following four prompts");
        //parseInt returns number value to passLength
        passLength = parseInt(checkLength);

        uppercaseCheck = confirm("Do you want uppercase letters?");

        if (uppercaseCheck) {
            passwordCheck = passwordCheck + upper

        }
        else {
        }

        lowercaseCheck = confirm("Do you want lowercase letters?");

        if (lowercaseCheck) {
            passwordCheck = passwordCheck + lower

        } else {
        }

        numberCheck = confirm("Do you want numbers?");

        if (numberCheck) {
            passwordCheck = passwordCheck + numb

        } else {
        }

        chararacterCheck = confirm("Do you want special characters?");

        if (chararacterCheck) {
            passwordCheck = passwordCheck + char

        } else {
        }
        //else if statement triggers if user doesn't select correct length criteria. 
        //Prevents user from going to second prompt
    } else if (checkLength < 8 || checkLength > 128) {

        alert("Password must be between 8 and 128 characters");

        checkPassword();
    }
}

//function to generate random password
//var passwordEnd = empty string to reset password return

function randomPassword() {
    checkPassword();
    //password text area -- id selector used to insert password into text box
    var passwordText = document.querySelector("#password");
    var passwordEnd = "";
    for (var i = 0; i < passLength; i++) {
        passwordEnd += passwordCheck[Math.floor(Math.random() * passwordCheck.length)];
    }
    //final password on screen
    passwordText.value = passEnd;
}
// generate password button and event listener

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", randomPassword);


