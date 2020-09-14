//Pseudo Code
//TODO- Create the generatePassword function that displays final password after user responds to prompts. All code exists within this function.

//TODO- Create prompts to ask user for password criteria.
  //TODO- Ask user for desired password length between 8 and 128 characters and save it to a VAR.
  //TODO- Ask user if they want uppercase
  //TODO- Ask user if they want lowercase
  //TODO- Ask user if they want numbers
  //TODO- Ask user if they want special characters
  //TODO- Create arrays with all needed characters (lowercase, uppercase, numbers, special characters)
  //TODO- create a new var that holds all the chosen characters
  //TODO- Create a conditional situation that saves the chosen character from our confirms to a new collection (using an if statement)

//TODO- Select the specific number of characters randomly from our final collection based on the users answer to how long they want the length of their password to be
  //can use Math.floor(Math.random()) to get a random number
    //for loop to the length of the selected character variable [ for(var i=0 ; i<"characterLengthPrompt" ; i++){"logic goes here"}]
//TODO- create an array to hold the final result
  //TODO- inside the for loop, push each character into the final character var

//TODO- Add a validation to make sure at least one prompt was selected.
//TODO- Add validation that confirms password is between 8-128 characters.

const resultEl = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl= document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}
function getRandomSymbol() {
  const symbols = "'!@#$%^&&*()[]{}=<>,.";
  return String.fromCharCode[Math.floor(Math.random() * symbols.length)];
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  prompt ("How many characters?")
   if(true) {
   generatePassword(length)
   }
  confirm("Uppercase letters?");
  confirm("Lowercase letters?");
  confirm("Include Numbers?");
  confirm("Include Special Symbols?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

