/*Create variable for the number to reach, put in div*/

// console.log(crystalNumbers);
var randomNumber = Math.floor(Math.random()*100);
$("#current-number").html("<h3>" + randomNumber + "</h3>");

/*Create variable and function for game random number between 19-120, put in div*/
var counter = 0;
console.log(counter);
var crystalNumbers = [10, 15, 5, 2];
// var crystalNumbers = function (min, max) {
//     return Math.floor(Math.random()*(1, 12))+ min;
// }


for (i = 0; i < crystalNumbers.length; i++) {
    var crystalImage = $("<img>");
   
    crystalImage.addClass("crystal-image");

    crystalImage.attr("src","assets/images/drusy.jpg");

    crystalImage.attr("crystalvalue", crystalNumbers[i]);

    $("#gems").append(crystalImage);
}

$(".crystal-image").on("click", function() {

    var imageValue = ($(this).attr("crystalvalue"));
    
    console.log(typeof parseInt(imageValue));
    counter += parseInt(imageValue);
    $("#score").html("<h3>" + counter + "</h3>");
    });
/*create variables for gems images, create function that generates
a random between 1-12 for each image when game starts*/

/*Create a "score-box" add to div*/

/*Create onclick event that adds a number to the total score box, when
each crystal button is clicked, add to div*/

/*Create a function that compares total score to random number*/

/*Create a wins/losses function that keeps track of them.  If gem
score matches random number add a "win", else add a loss, add to div*/

/*After a win or a loss, reset game, but not wins/losses box.

create object for each crystal and assign it a value
set random numbers for each crystal

crystal.green.value= getRandom(1,12) */