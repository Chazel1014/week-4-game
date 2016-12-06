// game starts, generate random number 
// assign random value per gem
// code where sum of gems = total score 
// +1 for wins, user totals exact value of randomNumber
// +1 for losses, user surpasses value of randomNumber 
// refresh gem values and random number after every +1 win, +1 loss
// refresh game after 5 wins? 

//generates random target number 
var target = Math.floor(Math.random() * (120 - 19) + 1) + 19;
var wins = 0;
var losses = 0;
var yourScore = 0;
$(".targetNum").text(target);


// for (var i = 0; i < 50; i++){
	//generates random value for the gems 
// var gemValue; 
	// console.log(gemValue);	
// }
var crystals = ['assets/images/blueGem.png', 'assets/images/greenGem.png', 'assets/images/redGem.png', 'assets/images/yellowGem.png'];

function drawGems(){
	$('.gemContainer').empty();

	for (var i=0; i < crystals.length; i++){
		var ranNum = Math.floor(Math.random() * 12) + 1;
		var img = $('<img>').attr('src', crystals[i]).attr('data-crystalval', ranNum).addClass('crystals');
		$('.gemContainer').append(img);
	}
}

drawGems();

$(document).on('click', '.crystals', function(){
	yourScore = yourScore + $(this).data('crystalval');
	$('#yourScore').text(yourScore);

	if (yourScore == target){
		wins++;
		$('.countWins').text(wins);
		alert('you won' + wins);
		drawGems();
		target = Math.floor(Math.random() * (120 - 19) + 1) + 19;
		$(".targetNum").text(target);

		yourScore = 0;
		$('#yourScore').text(yourScore);
	}else if (yourScore > target){
		losses++;
		$('.countLosses').text(losses);
		alert('you lose' + losses)
		drawGems();
		target = Math.floor(Math.random() * (120 - 19) + 1) + 19;
		$(".targetNum").text(target);
		yourScore = 0;
		$('#yourScore').text(yourScore);

	}
})


// for (var i = 0; i < crystals.length; i++){
// 	gemValue = Math.floor(Math.random() * (12 - 1) + 1) + 1;
// 	$('.gemContainer').append('<img class="gemImages" id="blueGem" src="'+crystals[i]+'" alt="blueGem" data-gem-Value="'+gemValue+'">');
// 	console.log(gemValue);
// }

// $('.gemImages').each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });
//


//click function for gems and their values
// $(".gemImages").on("click", function() {
//     // console.log($(this).data("gemValue"));
//     $(this).
// });


		


// if (target === totalScore) {
// 	wins++; 
// } else if (totalScore > target) {
// 	losses++; 
// }
