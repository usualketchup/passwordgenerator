// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  confirm("Confirm what criteria you will want to choose from in the following questions.")
  var lengthcriteria = prompt("What length do you want your password to be? Must be at least 8 characters and no more than 128.")
  if (parseInt(lengthcriteria) < 8 || parseInt(lengthcriteria) > 128 || parseInt(lengthcriteria) === NaN || lengthcriteria === null) {
    alert("You must enter a number in between 8 and 128.")
    return;
  }

  var lowercasecriteria = confirm("Do you want lowercase characters?")
  var uppercasecriteria = confirm("Do you want uppercase characters?")
  var numericcriteria = confirm("Do you want numeric characters?")
  var specialcriteria = confirm("Do you want special characters?")
  if (lowercasecriteria === false && uppercasecriteria === false && numericcriteria === false && specialcriteria === false) {
    alert("Please choose a character type or else the code will not work.")
    return;
  }

  var uppervalues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowervalues = "abcdefghijklmnopqrstuvwxyz";
  var numvalues = "1234567890";
  var specialvalues = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var password = "";

  for (var i = 0; i < parseInt(lengthcriteria); i++) {
    if (lowercasecriteria && password.length < parseInt(lengthcriteria)) {
      password = password + lowervalues.charAt(Math.floor(Math.random() * Math.floor(lowervalues.length)))
    }
    if (uppercasecriteria && password.length < parseInt(lengthcriteria)) {
      password = password + uppervalues.charAt(Math.floor(Math.random() * Math.floor(uppervalues.length)))
    }
    if (numericcriteria && password.length < parseInt(lengthcriteria)) {
      password = password + numvalues.charAt(Math.floor(Math.random() * Math.floor(numvalues.length)))
    }
    if (specialcriteria && password.length < parseInt(lengthcriteria)) {
      password = password + specialvalues.charAt(Math.floor(Math.random() * Math.floor(specialvalues.length)))
    }
  }
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);