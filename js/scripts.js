var sentence = prompt("Please enter a sentence: ");
console.log(sentence);

var firstLast =function(sentence) {return sentence.substr(0,1) + sentence.slice(-1);};

var upperCase = function(sentence) {return firstLast(sentence).toUpperCase();};
alert(upperCase(sentence));



//reverse the first and last letter of a sentence
var reverseFirstLast = function(sentence){
   var first = sentence[0];
   var last = sentence[sentence.length -1];
   return last.toUpperCase() + first.toUpperCase();

}

document.write(reverseFirstLast(sentence));
document.write("<br>");

// add the result from reverseFirstLast to the original sentence
var addFirstLast = function(sentence){
  var firstLast = reverseFirstLast(sentence);
  return sentence + firstLast;
}

document.write(addFirstLast(sentence));
