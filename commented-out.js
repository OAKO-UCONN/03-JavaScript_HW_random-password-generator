  //let show = myShows[Math.floor(Math.random() * myShows.length)];
  
  // let chosenSpecialChars = specialChars[Math.floor(Math.random() * specialChars.length)];
  // console.log("Line 123")

  /*
  SymGEN(for (let1 = 0; let1 < passwordLengthCount; let1++) {
  chosenSpecialChars = specialChars[Math.floor(Math.random() * specialChars.length)];
  console.log("let1")
  });
  */
  
  
  //alert(chosenSpecialChars)

  // let chosenNumbericChars = numericChars[Math.floor(Math.random() * numericChars.length)]
  // console.log("Line 132")
  /*
  NumGEN()
  for (let2 = 0; let2 < passwordLengthCount; let2++) {
  chosenNumbericChars = numericChars[Math.floor(Math.random() * numericChars.length)]
  console.log("let2")
  }
  */
  //alert(chosenNumbericChars)

  // let chosenLowerCasedChars = lowerCasedChars[Math.floor(Math.random() * lowerCasedChars.length)]
  // console.log("Line 141")
  
  // function lowercaseGEN(){
  //  for (let3 = 0; let3 < passwordLengthCount; let3++) {
  //   chosenLowerCasedChars = lowerCasedChars[Math.floor(Math.random() * lowerCasedChars.length)]
  //   console.log("let3")
  //   }
  // }
  //alert(chosenLowerCasedChars)
  

  // let chosenUpperCasedChars = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]
  // console.log("Line 150")
  /*
  for (let4 = 0; let4 < passwordLengthCount; let4++) {
  chosenUpperCasedChars = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]
  console.log("let4")
  }
  */

  //alert(chosenUpperCasedChars)
  // console.log("Line 156")
  // var n = [chosenSpecialChars, chosenNumbericChars, chosenUpperCasedChars, chosenLowerCasedChars];
  // console.log("Line 158")

    //n.push(upperCasedCharacters);
    //n.push(lowerCasedChars);
    //n.push(specialChars);
    //n.push(numericChars);
//   console.log("Line 164")
//   for (v = 0; v < passwordLengthCount; v++) {
//     console.log("Line 166")
//     console.log("N: "+n);
//     console.log("Line 168")
//     var i;
//     console.log("Line 170")
//     var tempPwd = [];
//     console.log("Line 172")
//     tmppass = tempPwd[Math.floor(Math.random() * tempPwd.length)];
//     console.log("Line 174")
//     for (i = 0; i < passwordLengthCount; i++) {
//       console.log("Line 176")
//       let output = n[Math.floor(Math.random() * n.length)];
//       console.log("Line 178")
//       tempPwd.push(tmppass);
//       console.log("Line 180")
//       tempPwd.push(output);
//       console.log("Line 182")
//       console.log("temp pwd array: "+tempPwd);
//       console.log("Line 184")
//       alert(output)
//       console.log("Line 186")
//       for (j = 0; j < passwordLengthCount; j ++) {
//         console.log("Line 188")
//         document.getElementById("password").innerHTML =
//         console.log("Line 190")
//         output;
//         console.log("Line 192")
//       }
//     }
//   console.log("Line 195")
//   document.getElementById("password").innerHTML = tempPwd.join("");
//   console.log("Line 197")
//   }
  

//   //   output;
// }

/*
SymGEN(for (let1 = 0; let1 < passwordLengthCount; let1++) {
  chosenSpecialChars = specialChars[Math.floor(Math.random() * specialChars.length)];
  console.log("let1")
  });
*/






/*
var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
*/



/*

var listEl = document.querySelector("grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bannanas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function (event) {
  if (event.target.maches("button")){
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});

*/

/*

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passowrdLength = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  //Complete your function here...

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false

*/
/*

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passowrdLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  if (passowrdLength > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

*/

/*
   // Object to store user input
   var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false

  // Conditional statement to check if user does not include any types of characters.

  return passwordOptions;
}
//  }   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   /   / 

// Function for getting a random element from an array
//Complete your function here...

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  var result = [];

  //Complete your function here...

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/
/*

//var randoms = [chosenSpecialChars, chosenNumericChars, chosenLowerCasedChars, chosenUpperCasedChars];

//let randomss = randoms[Math.floor(Math.random() * randoms.length)];
//console.log(randomss)

*/