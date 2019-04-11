/*eslint-env browser*/

//STEP 1

/*

var name = prompt("Enter your name pls.");
var namelength = name.length;
alert(namelength);

*/


//STEP 2


/*

var name = prompt("Enter your name pls.");
var position = prompt("Enter a number pls.");
 position = name.charAt(position);
alert(position);

// not being able to detect a number bigger than the amount of characters


*/





//STEP 3

/*

var firstName = prompt("Enter your first name pls.");
var lastName = prompt("Enter your last name pls.");
alert(firstName.concat(lastName));

*/




//STEP 4

/*

var text = "The quick brown fox jumps over the lazy dog";
var indx = text.indexOf("fox");
alert(indx);

*/




//STEP 5

/*

var text = "The quick brown fox jumps over the lazy fox";
var indx = text.lastIndexOf("fox");
alert(indx);

*/



//STEP 6

/*

var text = "The quick brown fox jumps over the lazy dog";
var fullName = prompt("Enter your full name pls."); 
alert(text.replace("the lazy dog", fullName));

*/





//STEP 7

/*

var text = "The quick brown fox jumps over the lazy dog";
var word = window.prompt("Enter a word bro").trim();
var fa = text.indexOf(word);
if (fa === -1) {
    window.alert("\"" + text + "\"\nThe word '" + word + "' is not in the text.");
} else {
    window.alert("\"" + text + "\"\nFound '" + word + "' at index " + fa + ".");
}

*/


// slide`s code below

/*
var car = "My daily driver is a Chevy Camaro";
window.console.log(car.search("Chevy"));

var car = "My daily driver is a Chevy Camaro";
window.console.log(car.search(/Chevy/g));

*/




//STEP 8


/*

var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(31);
alert(new_string.toUpperCase());

*/



//STEP 9

/*

var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(text.trim().toLowerCase());

*/



//STEP 10

/*

var text = "The quick brown fox jumps over the lazy dog";
var capFirstLetter = text.charAt(0).toUpperCase() + text.slice(1)
alert(capFirstLetter);

*/


