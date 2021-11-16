# Dr. Awkward Palindrome - A Coding Project
This program takes an input word or phrase and checks whether it qualifies as a palindrome. For example, Dr. Awkward is a palindrome.

# Live Demo
https://jorysmith.github.io/DrAwkwardPalindrome/

# Description
A JavaScript coding exercise using objects, RegEx, loops, functions, and conditional statements.
The code is structured in three functions: userInputText(), palindromeCheck(), and displayResults(). 
This program takes an input word or phrase and determines whether it qualifies as a palindrome. The first step is to add an event listener to "Run Check" button on the app.html page. Once a user clicks the button, the userInputText() function is called and the values from input field are grabbed. The values are then passed to the function palindromeCheck() for form validation and to see if the input value qualifies as a palindrome. 

The palindromeCheck() function reverses a user's word or phrase, removes any spaces, and sees if it matches the original input. The input is first changed to all lower case because this program is not concerned with finding a perfect letter casing match and instead focused on simply determining whether the input is a palindrome or not. A regular expression (RegEx) is used to filter out all non letters and numbers, all matches, and regardless of letter casing. Then the string is reversed and compared to the original input string. A JavaScript object is created to store the palindrome test results, including the properties, "result", "msg", and "reversed". The palindromeCheck() returns this object.

The results object is then passed to displayResults() in order to inject into the DOM a success alert message if the original input word is a palindrome or a fail alert message if that's not the case.
                   
