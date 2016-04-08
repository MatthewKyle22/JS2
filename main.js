var question = prompt("Enter a word!");

var length = question.length;
// console.log(alert('There are ' + length + ' characters in the word'));
var char = question.charAt(2);
var lower = question.toLowerCase('');
var upper = question.toUpperCase('');
var sentence = "The " + question + ' is a great magazine!';
var sub = question.substring(1, 4);

console.log(alert('Your word was ' + question + '! \n' +
    'There are ' + length + ' characters in the word \n' +
    "The third character is '" +  char + "'.\n" + 
    'Lowercase: ' + lower +
    '\nUppercase: ' + upper +
    '\nExample: ' + sentence +
    '\nSubword: ' + sub));