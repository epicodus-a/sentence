
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

// document.write(reverseFirstLast(sentence));
// document.write("<br>");

// add the result from reverseFirstLast to the original sentence
var addFirstLast = function(sentence){
  var firstLast = reverseFirstLast(sentence);
  return sentence + firstLast;
}

// document.write(addFirstLast(sentence));
// document.write("<br>");


// add fourth function to count letters and print middle letters

var middleLetter = function(sentence) {
  var n = sentence.length;
  var x =n/2
  var y = Math.floor(x);
  return sentence[y] + addFirstLast(sentence);
};
// alert(middleLetter(sentence));


//reverse a sentence
var myReverse = function(sentence){
  var reverseString = "";
  for (var i = sentence.length - 1; i > 0; i -- ){
    reverseString += sentence[i];
  }
  return reverseString;
}

// document.write(myReverse(middleLetter(sentence)));


$(function(){
  $("#wal1").click(function() {
    // alert(sentence);
    $("#wal2").css( "display", "none");
    $("#wal1").css( "display", "none");
    $("#wal2").css( "display", "block");


  });
  $("#wal2").click(function() {
    // alert(myReverse(middleLetter(sentence)));
    $("#wal1").css( "display", "none");
    $("#wal2").css( "display", "none");
    $("#wal1").css( "display", "block");




  });
});
