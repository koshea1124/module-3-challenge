// Assignment code here
var passwordLength = 8;
var totalArr =[];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','-','_','<','>'];
var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppeCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Defining generatePassword
function generatePassword() {
  totalArr = [];
  //prompt user for password criteria (length, lower, upper, special characters)
  passwordLength = parseInt(window.prompt ("How many characters would you like your password to contain (between 8-128)?"))
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    window.alert ("Please choose a number to make your password length between 8-128");
    return false;
  }
  //concatinates special characters to an array and makes them available to password if true
  if(window.confirm ("Click OK to include special characters?")) {
    totalArr = totalArr.concat(specialCharArr);
  }
  //concatinates numbers to an array and makes them available to password if true
  if(window.confirm ("Click OK to include numbers?")) {
    totalArr = totalArr.concat(numbersArr);
  }
  //concatinates lowercase letters to an array and makes them available to password if true
  if(window.confirm ("Click OK to include lower case letters?")) {
    totalArr = totalArr.concat(lowerCaseArr);
  }
  //concatinates uppercase letters to an array and makes them available to the password if true
  if (window.confirm ("Click OK to include upper case letter?")) {
    totalArr = totalArr.concat(uppeCaseArr);
  }
 //for loop to add charcters to the password up to input character legnth
  var genPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random()* totalArr.length);
    genPassword = genPassword + totalArr[randomCharacter];
  }

//display generated password
  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //need to define this function
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //displays password onto the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
