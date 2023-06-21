// Sudo Code 
// 1. the generate password push button is pushed, then popup prompt window
// 2. ask for length of password 
// 3. verify length of password from users input - must be at least 8 characters and no more than 128
// 4. if step 3 is false, display "password must be at leat 8 character and no more than 128"
// 5. if step 3 is true, display Confirm window " include lowercase? " with button 'ok' and 'cancel'
// 6. display Confirm window "include uppercase?"
// 7. display Confirm window "include numeric?"
// 8. display Confirm window "special characters?
// 9. if at least once prompt window is select yes, then display in the generator box 
// 10. if not, display prompt window "need to have at leastt one character type to generate password"
// 11. restart from step 5

// Declare an array of password selection for password criteria from user inputs 
var passwordSelectionArray = [];

// Create constant variables including numbers, lower & upper cases alphabets & special characters;
// Assign them arrays containting all password characters. 
// Utilize [...] to convert string into an array with each character as a separate element.
const numberic = [... "0123456789"];
const lowercase = [...'abcdefghijklmnopqrstuvwxyz'];
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}","[","]","|","/",":",";","'","<",">",",",".","?"];
const uppercase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

// Declare varaibale named generateBtn and uses the 'document.querySelector()' method to selecet ID selector from HTML to create the generate button - code line 28 HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. It listens for a "click" event and specifies the function writePassword as the event handler.
// If an user clicks on generate button, it will execute writePassword function
generateBtn.addEventListener("click", writePassword);

// Function writePassword handles the logic for generating and displaying a password based on criteria that user requested from prompt windows
// If the password is between 8 and 128, and statement became true, code will call for passwordCriteria function 
// Use  document.querySelector("#password") to select the element with the ID "password" from the DOM. 
// If 'validPassword' is true, generate a password based on the criteria, and store into 'newPassword' variable and display it to the screen
// If false, display string below in else statement to the password box to warn for new 
// value property returns a string representing the current value of the input element. Returns the number or value from the password character to be string and display in password window
function writePassword() {
  var validPassword = passwordCriteria();
  var passwordText = document.querySelector("#password");
  if (validPassword){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  }
  else {
    passwordText.value = "Please input a valid number between 8 and 128 characters to generate the password! Click on Generate Password to Proceed ";
  }
}

// Uses a for loop to iterate actualCharNum based on number of character user requested  
// Inside the loop, the function generates a random index by multiplying Math.random() with the length of the passwordSelectionArray array and using Math.floor() to round it down to the nearest whole number. This index is used to access a random character from the passwordSelectionArray.
// selected  randomly for character is concatenated to the password string using the + = operator, building the password character by character.
// Once for loop is complete, Write password to the #password input
// Use console.log to display the variable below once console is executed (button pushed)
function generatePassword(){
  var password ="";
  for (var i =0; i < actualCharNum; i++) {
      password = password + passwordSelectionArray[Math.floor(passwordSelectionArray.length * Math.random())];
   }
  console.log("Number of times generate password button is pushed");
  return password;
} 

// Cast the answer with a number instead of string with const & Number   
// Use promt to display the initial window to ask for number of characters that user would like to generate for their password 
// Console # of character to console.log 
// Use a if statement to return false condition to the password generator function above if one of the false condition is met. Password must be a number and between 8 and 128. 
// Number.isNaN is for NaN output due to user input a variable that is not a number 
// Use confirm to pop up confirm window if password is within 8 to 128 characters. 
// Confirm window will ask user to include or exclude the following criterias to their password 
// Use concat to combine strings of user requested criterias 
// Return true to generate password to above 
function passwordCriteria(){
  passwordSelectionArray = [];
    const characterNumber = Number (window.prompt("Hi! How many characters of passowrd are you generating? Note: Password must be at least 8 chararcters and no more than 128", ""));
    console.log(characterNumber);
    actualCharNum = Number(characterNumber); 

    if (actualCharNum < 8 || actualCharNum > 128 || Number.isNaN(actualCharNum) ){
      window.alert ("Please select a valid number between 8 and 128 characters");
    return false;
    }

    if (confirm("Hey, homie! Would you like to include lowercase in your password? Click on 'Ok' to proceed and 'Cancel' to decline")){
      console.log("Add Lowercase");
      passwordSelectionArray = passwordSelectionArray.concat(lowercase);  
    }
    else {
      console.log("Don't add Lowercase")
    }

    if (confirm("Hey, homie! Would you like to include uppercase in your password? Click on 'Ok' to proceed and 'Cancel' to decline")){
      console.log("Add Uppercase")
      passwordSelectionArray = passwordSelectionArray.concat(uppercase);
    }
    else {
      console.log("Don't add Uppercase")
    }
  
    if (confirm("Hey, homie! Would you like to include numberic in your password? Click on 'Ok' to proceed and 'Cancel' to decline")){
      console.log("Add Numberic")
      passwordSelectionArray = passwordSelectionArray.concat(numberic);
    }
    else {
      console.log("Don't add Numberic")
    }
  
    if (confirm("Hey, homie! Would you like to include special characters in your password? Click on 'Ok' to proceed and 'Cancel' to decline")){
      console.log("Add Special Characters")
      passwordSelectionArray = passwordSelectionArray.concat(specialChars);
    }
    else {
      console.log("Don't add Special Character")
    }
  return true;  
}


