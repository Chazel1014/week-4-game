// game starts, generate random number 
// assign random value per gem
// code where sum of gems = total score 
// +1 for wins, user totals exact value of randomNumber
// +1 for losses, user surpasses value of randomNumber 
// refresh gem values and random number after every +1 win, +1 loss
// refresh game after 5 wins? 

//generates random target number 
var target = Math.floor(Math.random() * (120 - 19) + 1) + 19;
	$(".targetNum").text(target);
		
var gemImage = $("<img>");

//generates random value for each gem 
var gemValues = Math.floor(Math.random() * (12 - 1) + 1) + 1; 
	$(".container").append.


var totalScore = ""; 
		
var wins = 0;
var losses = 0;

if (target === totalScore) {
	wins++; 
} else if (totalScore > target) {
	losses++; 
}
