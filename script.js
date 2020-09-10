// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//TODO- Create the generatePassword function that displays final password after user responds to prompts.
//TODO- Need prompts to ask user for password criteria.
  //TODO- Ask user for desired password length between 8 and 128 characters and save it to a VAR.
  //TODO- Ask user for desired character types, such as lowercase, uppercase, numbers, and/or special characters with a confirm.



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
