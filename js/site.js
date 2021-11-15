// Get function
// On app.html page, add event listener to Run Check button
function userInputText() {
    // Ensure alertBox is invisble
    document.getElementById("alertBox").classList.add("invisible");
    // Get and store user's input string,
    let userInput = document.getElementById("userInput").value;    

    // Pass userInputArray to palindromeCheck to perform check
    let palindromeResults = palindromeCheck(userInput);

    // Display result to the webpage
    displayResults(palindromeResults);
}

// Logic function
// Palindrome check
// Reverse user's word or phrase, removing any spaces, see if it matches original input
function palindromeCheck(userInput) {
    // First update userInput to be all lowercase letters
    userInput = userInput.toLowerCase();

    // Remove spaces and special characters with RegEx
    let regex = /[^a-z0-9]/gi;    
    userInput = userInput.replace(regex, "");

    // Reverse input with for loop
    let reversedInput = [];
    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedInput.push(userInput[i])        
    }

    // Join reversedInput into a combined string
    let revString = reversedInput.join('');
    
    // Palindrome check, store results in an object property
    let returnObject = {};
    returnObject.result = false;
    
    if(revString == userInput) {
        returnObject.msg = "Yes, this is a palindrome!";
        returnObject.result = true;
    } else {
        returnObject.msg = "I'm sorry, this is not a palindrome.";
        returnObject.result = false;
    }
    // Update a new object property, reversed, to be reversedInput
    returnObject.reversed = revString;

    return returnObject;
}

// Display function
// If word is a palindrome, display success message, otherwise, display the fail message
function displayResults(returnObject) {
    document.getElementById("alertHeader").innerHTML = returnObject.msg;
    document.getElementById("alertMsg").innerHTML = `Your phrase reversed is: <br> ${returnObject.reversed}`;
    if (returnObject.result) {
        document.getElementById("alertBox").classList.remove("alert-danger");
        document.getElementById("alertBox").classList.add("alert-success");
    }
    document.getElementById("alertBox").classList.remove("invisible");
}