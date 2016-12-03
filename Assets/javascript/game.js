//How to play
//first the computer will generate a random number between 19 - 120
//the user will click on a combination of the four gems to get a sum equal to the random number 
//gem values will be between 1-12 
//the users sum = random number is a win
//the users sum > random number is a loss 
//the game will reset with a new random number and new gem values after a win or a loss 
// wins and losses counter will remain 


// pseudo coding 

//computer will generate a target number between 19 - 120 for each new game
//computer will generate value between 1-12 for each of four gems
//these values will visibly total in the Score box 
//when the score = target number, win + 1
//if the score > target number, loss +1 
//target number and gems will reset to new values, wins/loss stays the same


//computer generated target number 
var target = Math.floor(Math.random() * (120-19) +1); 
	$("#target").text(target); 

// loops through length of images 
for (var i = 0; i < 4; i++){

	//generates a value 1-12 - to be applied to gems 
	var gemValue = Math.floor(Math.random() * (12-1) +1);
	console.log(gemValue);
}

var gemArray = [

		$("<img>").attr("src", "assets/images/blueGem.png").attr('class', "blueGem").attr('data-gem', gemValue[i]);

		// $("<img>").attr("src", "assets/images/greenGem.png").attr('class', "greenGem").attr('data-gem', gemValue[i]),
		
		// $("<img>").attr("src-3", "assets/images/yellowGem.png").attr('class', "yellowGem").attr('data-gem', gemValue[i]),
		
		// $("<img>").attr("src-4", "assets/images/redGem.png").attr('class', "redGem").attr('data-gem', gemValue[i])];

		$(".gemContainer").append(gemArray);	
	
	console.log(gemArray);

	 
	

	// gemStones.addClass("gem-image gem-color gem-value");


// $('#makeButton').on('click', function(){
//         for(var i=0; i < bands.length; i++){
//           var button = $('<button>').text('click me').attr('class', 'music').attr('data-band', bands[i]);
//           $('div').append(button);
//         }
//       });
 






//sample image 
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQJPv3SRb_d1oarO4mz9ITYJEHHR-jVA2q5PyOhTBgB4XDTN-JA
