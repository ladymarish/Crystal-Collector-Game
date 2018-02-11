//each crystal has a random number assigned
//a random number is generated 
//when you click on the crystal it adds a number to the box
//if the number guessed is more then the number in the box - you lose

$(document).ready(function() {

var userGuess;
var computerGuess;
var crystalNumber;
var crystalRandom;
var wins;
var losses;
var totalScore;
var gameEnd;
var wins = 0;
var losses = 0;
var changeBackgrounds;
var backgroundsLost = ["assets/images/week-4-background-lost1.jpg", "assets/images/week-4-background-lost2.jpg", "assets/images/week-4-background-lost3.jpg", "assets/images/week-4-background-lost4.jpg"];
var backgroundsWon = ["assets/images/week-4-background-won1.jpg", "assets/images/week-4-background-won2.jpg", "assets/images/week-4-background-won3.jpg", "assets/images/week-4-background-won4.jpg"];


//initiate the game
function startGame () {
   gameEnd = false;
   userGuess = "";
   totalScore = 0;
   computerGuess = Math.floor((Math.random() * 100) + 1);
   crystalRandom = Math.floor((Math.random() * 10) + 1);
   changeWonBackground = backgroundsWon[Math.floor(Math.random() * backgroundsWon.length)];
   changeLostBackground = backgroundsLost[Math.floor(Math.random() * backgroundsLost.length)];
   imageCrystal = $(".cr");
   $("#number").html(computerGuess);
   $("#wins").html("Wins: " + wins);
   $("#losses").html("Losses: " + losses);
};

//targets every class 
$(".cr").each(function(index, item) {
   crystalRandom = Math.floor((Math.random() * 10) + 1);
   $(item).attr("crystals", crystalRandom);
   var crystalValue = $(item).attr("crystals");
   console.log(crystalValue);
});
   

$(".cr").on("click", function() {
   var crystalValue = $(this).attr("crystals");
   totalScore = parseInt(totalScore) + parseInt(crystalValue);
   $(".score").html(totalScore);
   if (totalScore === computerGuess) {
     $("body").css("background-image", 'url("' + changeWonBackground + '")');
	  wins += 1;
	  $("#wins").html("Wins: " + wins);
	  gameEnd = true;
	  startGame ();
   }
   else if (totalScore > computerGuess) {
      $("body").css("background-image", 'url("' + changeLostBackground + '")');
      losses += 1;
      $("#losses").html("Losses: " + losses);
      gameEnd = true;
      startGame ();
   }
});


startGame ();

});