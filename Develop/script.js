// Assignment code here
//gernerate new password
function generatePassword(){

  var newPasswordLength;

  // ask user if the length of the password
  var passwordLength = window.prompt('How many characters would you like your password to have?(Within 8-128)');
  // Conditional recursive function call on passwordLength
  if(passwordLength === null){//Cancel
    window.alert("Cancel Button was clicked!");
    return;
  }else if (passwordLength === "") {//nothing was entered
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }  else if(parseInt(passwordLength).toString() === "NaN"){  //Not a number
      window.alert("You need to provide a valid integer! Please try again.");
      return generatePassword();
  }else if(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){  //Not within 8 to 128
    window.alert("You need to provide a valid integer within 8 to 128! Please try again.");
    return generatePassword();
  }
  else if(parseInt(passwordLength) % 1 !== 0){  //Not an integer
    window.alert("You need to provide a valid integer within 8 to 128 without decimals! Please try again.");
    return generatePassword();
  }else{
    newPasswordLength = parseInt(passwordLength);
  }

  //a function for getting a selected character list
  var getCharactersPicked = function(){
    var charactersPicked = "";
    //Asking what character types to include
    var isLowercase = window.confirm("Want lowercase characters?");
    if (isLowercase === true) {
      var lower = "abcdefghijklmnopqrstuvwxyz";
      charactersPicked += lower;
    }

    var isUppercase = window.confirm("Want uppercase characters?");
    if (isUppercase === true) {
      var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charactersPicked += upper;
    }

    var isNumbers = window.confirm("Want numbers?");
    if (isNumbers === true) {
      var num = "0123456789";
      charactersPicked += num;
    }

    var isSpecialChar = window.confirm("Want special characters?");
    if (isSpecialChar === true) {
      var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      charactersPicked += special;
    }

    //Conditional recursive function call on no type picked
    if (charactersPicked === ""){
      window.alert("At least one character type should be selected!");
      return getCharactersPicked();
    }
    return charactersPicked;
  }
  
  var charactersList = getCharactersPicked();
  console.log(charactersList);
  var newPasswordList = "";

  for (var i = 0; i < newPasswordLength; i++){
    var random = Math.floor(Math.random() * charactersList.length);
    var randomChar = charactersList.charAt(random);
    newPasswordList += randomChar;
  }

  return newPasswordList;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (typeof password === "undefined"){
    return;
  }
  else{
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
