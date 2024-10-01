const textInput = document.getElementById("text-input");
// getting the user input from the "palindrome field"

function validation() {
  const userInput = textInput.value; // getting the user input value

  if (userInput === "") {
    alert("Please input a value");
    return false; // if there's no input, the function returns false
  }
  return true; // otherwise the function is true and that is returned
}


// Palindrome check function

function palindrome(str) {
  const re = /[^A-Za-z0-9]/g; // removes all non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(re, ''); // removes other characters and changes characters to lower case
  const reversedStr = cleanedStr.split('').reverse().join(''); // splits the cleaned string into solitary characters and joins them, f.e. splits into 'a', 'b', 'c', 'd', then reverses the characters into 'd', 'c', 'b', 'a' and at last it joins the reversed characters into 'dcba'.

  return cleanedStr === reversedStr; // returns as true if the cleaned, lowercase string is strictly equal to the reversed
};

// Now we'll combine the above functions (validation and palindrome) into a function we can call when the user clicks the button "Check"

function palindromeCheck() {
  // we start by checking that the input is not empty
  if (validation()) {
    const userInput = textInput.value; // Gets the value of the input field
    const resultElement = document.getElementById("result"); // where the result is shown

    if (palindrome(userInput)) {
      resultElement.textContent = `${userInput} is a palindrome`;
    } else {
      resultElement.textContent = `${userInput} is not a palindrome`;
    };
return document.getElementById("result")
  };
};