// characters to be included in password
var specialChars = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
  ];
  
  //  numeric characters to be included in password
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  //  lowercase characters to be included in password
  var lowerCasedChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  //  uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
//var passwordLengthCount = prompt("How long do you want your password?")

console.log("Line 92")
function ClickedButton() {
  console.log("Debugger--> function ClickedButton() Excecuted @ Line 94")
  var passwordLengthCount = prompt("How many characters do you want your password?");
  
  if (passwordLengthCount < 8) {
    console.log("Debugger--> if (passwordLengthCount < 8) {--} Excecuted @ Line 98")
    alert("Password length must be at least 8 characters");
    console.log("Password length must be at least 8 characters");
    return;
  }

  if (passwordLengthCount > 128) {
    console.log("Debugger--> if (passwordLengthCount < 8) { Excecuted @ Line 105")
    alert("Password length must less than 129 characters");
    console.log("Password length must less than 129 characters");
    return;
  }

  if (isNaN(passwordLengthCount) == false ){
    console.log("Debugger--> if (isNaN(passwordLengthCount) == false ){ Excecuted @ Line 112")
    if (passwordLengthCount != null) {
      console.log("if (passwordLengthCount != null) { Excecuted @ Line 114")
      //document.getElementById("password").innerHTML =
      //passwordLengthCount;
      console.log("<> Line 117 About to alert user on how long password is")
      alert("Your password is" + " " + passwordLengthCount + " " + "characters long!")
      console.log("<> Line 119 Alerted user their password length.")
      
      ////////OPTIONS
      //var myLocalVariable = 'Hello';
      //window.myGlobalVariable = mylocalVariable;
      /////Prompting user if they want lowercase, uppercase, numbers, symbols.
      
      //CONFIRM LOWERCASE
        var WantsLowerCase = 2;
        window.WantsLowerCase = WantsLowerCase;
        if (confirm("Do you want lowercase characters?")) {
          //txt = "You pressed OK!";
          var WantsLowerCase = 1;
          window.WantsLowerCase = WantsLowerCase;
          console.log("var WantsLowerCase = 1")
        } else {
          var WantsLowerCase = 0;
          window.WantsLowerCase = WantsLowerCase;
          console.log("var WantsLowerCase = 0")
          //txt = "You pressed Cancel!";
        }
        //document.getElementById("demo").innerHTML = txt;

      
      //CONFIRM UPPERCASE
        //var txt;
        var WantsUpperCase = 2;
        window.WantsUpperCase = WantsUpperCase;
        if (confirm("Do you want Uppercase characters?")) {
          //txt = "You pressed OK!";
          var WantsUpperCase = 1;
          window.WantsUpperCase = WantsUpperCase;
          console.log("var WantsUpperCase = 1")
        } else {
          var WantsUpperCase = 0;
          window.WantsUpperCase = WantsUpperCase;
          console.log("var WantsUpperCase = 0")
          //txt = "You pressed Cancel!";
        }
        //document.getElementById("demo").innerHTML = txt;

      //CONFIRM NUMBERS
        //var txt;
        var WantsNumbers = 2;
        window.WantsNumbers = WantsNumbers;
        if (confirm("Do you want numbers?")) {
          //txt = "You pressed OK!";
          var WantsNumbers = 1;
          window.WantsNumbers = WantsNumbers;
          console.log("WantsNumbers = 1")
        } else {
          var WantsNumbers = 0;
          window.WantsNumbers = WantsNumbers;
          console.log("WantsNumbers = 0")
          //txt = "You pressed Cancel!";
        }
        //document.getElementById("demo").innerHTML = txt;

      //CONFIRM SYMBOLS
        //var txt;
        var WantsSymbols = 2;
        window.WantsSymbols = WantsSymbols;
        if (confirm("Do you want symbols?")) {
          //txt = "You pressed OK!";
          var WantsSymbols = 1;
          window.WantsSymbols = WantsSymbols;
          console.log("var WantsSymbols = 1")
        } else {
          var WantsSymbols = 0;
          window.WantsSymbols = WantsSymbols;
          console.log("var WantsSymbols = 0")
          //txt = "You pressed Cancel!";
        }
        //document.getElementById("demo").innerHTML = txt;


      //OPTIONS/////////.    
      //generate the random password according the length
      var password = generateRandomPass(passwordLengthCount);
      console.log(password);
      //document.querySelector("#password").innerHTML = password.join("");
      document.querySelector("#password").innerHTML = password;
    }
  }
}

  function generateRandomPass(length){
    var tempPassword="";
    for(var i =0;i<length;i++){
      //get a random character
      
      //Checks if user confirmed that they wanted lowercase characters.
      if (WantsLowerCase === 1) {
        tempPassword+=lowerCasedChars[Math.floor(Math.random() * lowerCasedChars.length)];
        console.log("User requested lowercase characters")
      } else if (WantsLowerCase === 0) {
        console.log("User refuses lowercase characters.")
      } else {
        alert("ERROR! WantsLowerCase !== 1 || 0 ")
        console.log("ERROR! WantsLowerCase !== 1 || 0 ")
      }
      
      //Checks if user confirmed that they wanted uppercase characters.
      if (WantsUpperCase === 1) {
        tempPassword+=upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
        console.log("User requested Uppercase characters.")
      } else if (WantsUpperCase === 0) {
        console.log("User refuses Uppercase characters.")
      } else {
        alert("ERROR! WantsUpperCase !== 1 || 0 ")
        console.log("ERROR! WantsUpperCase !== 1 || 0 ")
      }

      //Checks if user confirmed that they wanted numeric characters.
      if (WantsNumbers === 1) {
        tempPassword+=numericChars[Math.floor(Math.random() * numericChars.length)];
        console.log("User requested numberic characters.")
      } else if (WantsNumbers === 0) {
        console.log("User refuses numeric characters.")
      } else {
        alert("ERROR! WantsNumbers !== 1 || 0 ")
        console.log("ERROR! WantsNumbers !== 1 || 0 ")
      }
     
      //Checks if user confirmed that they wanted special symbolic characters.
      if (WantsSymbols === 1) {
        tempPassword+=specialChars[Math.floor(Math.random() * specialChars.length)];
        console.log("User requested speical characters.")
      } else if (WantsSymbols === 0) {
        console.log("User refuses special characters.")
      } else {
        alert("ERROR! WantsSymbols !== 1 || 0 ")
        console.log("ERROR! WantsSymbols !== 1 || 0 ")
      }
    }
    return tempPassword;
  }
console.log("<> Line 216 about to getElementByID")
//alert("Your password is:" + " " + tempPassword)
/*
for(var i =0;i<length;i++){
FinalPassword=tempPassword[Math.floor(Math.random() * tempPassword.length)];
}
*/
//document.querySelector("#demo").innerHTML = "Hello World!";
//document.querySelector("#password").innerHTML = password.join("");
//document.getElementById("password").innerHTML = password.join("");
console.log("<> Line 226 getElementByID excecuted?")
//document.getElementById("password").innerHTML = tempPwd.join("");

/*
while (true)
{
    switch (goto_variable)
    {
        case 1:
            // some code
            goto_variable = 2
            break;
        case 2:
            goto_variable = 5   // case in etc. below
            break;
        case 3:
            goto_variable = 1
            break;

         etc. ...
    }

}
*/


/*

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/

  /*
  function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
  */

