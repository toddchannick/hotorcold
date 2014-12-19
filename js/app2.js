$(document).ready(function() {

	/*--------------------variables-------------------*/
	/*------------------------------------------------*/
	var computerNumber;
	var userNum;
	var userNumVal;
	var guess;
	var guessCounter = 0;
	var difference;
	var guessStatus = $('#guess-status');
	var guessStatusMsg = $('#guess-status').children();
	var guessList = $('#guess-list');



	/*-------------------functions--------------------*/
	/*------------------------------------------------*/

	/*---generates a random number between 1 and 100---*/
	var generateRandomNum = function(){
		var randomNumber = (Math.floor(Math.random()*100)+1);
		console.log("Generated Random Number = "+ randomNumber);

		return randomNumber
	};

	/*----clears guesses from guess list and input box----*/
	var clearGuesses = function() {
		guessCounter = 0
		$('#guess-list').empty();
		$('#guess-status').hide();
		$('input').val('');
	};

	/*-----starts a new game-----*/
	var playGame = function(){
		clearGuesses();
		computerNumber = generateRandomNum();
		$('input').focus();
	};

	var guessGauge = function(){

	}


/*---STARTS THE GAME!(function described above)---*/
playGame();

	/*-----getting user's guess-----*/
	var getGuess = function(){
		guess = $('#guess');
		userNum = ($('#guess').val());
		return userNum;
		return guess;
		console.log("User number = "+userNum);
	};

	/*----alerts user if number is invalid---*/
	var checkNumber = function(){
		if(guess>100){
			window.alert('Numbers between 1 and 100 only!');
		};
	};

	var endGame = function(){
		$('.gameover').show();
	};

	/*---Action on submit button click---*/
	$('.guess-submit').on('click',function(){
		guessStatus.text('');
		getGuess();
		guess.focus();
		userNumVal = parseInt(userNum);
		var difference = (computerNumber - userNumVal);
		var absDifference = Math.abs(difference);

		if(guessCounter < 9){
			if (userNumVal<101 && userNumVal >0){
				guessCounter++;
				console.log(guessCounter);
				if (absDifference > 18){
					guessStatus.append('<p>'+userNum+' is... <span class="cold-status">COLD</span></p>');
					guessList.append('<li class="cold">'+userNum+'</li>').find('.cold').fadeIn('slow');
					guess.val('');
				}
				else if (absDifference >8 && absDifference <= 18){
					guessStatus.append('<p>'+userNum+' is... <span class="warm-status">WARM</span></p>');
					guessList.append('<li class="warm">'+userNum+'</li>');
					guess.val('');
				}
				else if (absDifference >2 && absDifference <= 8){
					guessStatus.append('<p>'+userNum+' is... <span class="hot-status">HOT</span></p>');
					guessList.append('<li class="hot">'+userNum+'</li>');
					guess.val('');
				}
				else if (absDifference >0 && absDifference <= 2){
					guessStatus.append('<p>'+userNum+' is... <span class="burning-status">BURNING</span></p>');
					guessList.append('<li class="burning">'+userNum+'</li>');
					guess.val('');
				}
				else if (absDifference == 0){
					guessStatus.append('<p>'+userNum+' is... <span class="correct-status">CORRECT!</span></p>');
					guessList.append('<li class="correct">'+userNum+'</li>');
					guess.val('');
				};
			}
			else {
				window.alert('Numbers between 1 and 100 please!');
				guess.val('');
			};
		}
	});


	




	/*----Action on enter-----*/
	$('#guess').keypress(function(e) {
        if (e.which == 13) {
			console.log("Guess count: "+guessCounter);
			guessStatus.text('');
			getGuess();
			guess.focus();
			console.log("User number = "+userNum);
			userNumVal = parseInt(userNum);
			var difference = (computerNumber - userNumVal);
			var absDifference = Math.abs(difference);


			if (userNumVal<101 && userNumVal >0){
				guessCounter ++;
				if (guessCounter < 8){
					if (absDifference > 15){
						guessStatus.append('<p>'+userNum+' is... <span class="cold-status">COLD</span></p>');
						guessList.append('<li class="cold">'+userNum+'</li>').find('.cold').fadeIn('slow');
						guess.val('');
					}
					else if (absDifference >8 && absDifference <= 15){
						guessStatus.append('<p>'+userNum+' is... <span class="warm-status">WARM</span></p>');
						guessList.append('<li class="warm">'+userNum+'</li>');
						guess.val('');
					}
					else if (absDifference >3 && absDifference <= 8){
						guessStatus.append('<p>'+userNum+' is... <span class="hot-status">HOT</span></p>');
						guessList.append('<li class="hot">'+userNum+'</li>');
						guess.val('');
					}
					else if (absDifference >0 && absDifference <= 3){
						guessStatus.append('<p>'+userNum+' is... <span class="burning-status">BURNING</span></p>');
						guessList.append('<li class="burning">'+userNum+'</li>');
						guess.val('');
					}
					else if (absDifference == 0){
						guessStatus.append('<p>'+userNum+' is... <span class="correct-status">CORRECT!</span></p><p><span class="lower-text">Great Job! <span id="new">New game?</span></span></p>');
						guessList.append('<li class="correct">'+userNum+'</li>');
						guess.val('');
					};
				}
				else {
					guessStatus.append('<p><span class="hot-status">GAME OVER!</span></p><p><span class="lower-text">You are only allowed 8 guesses! <span id="new">New game?</span></span></p>');
				};		
			}
			else {
				window.alert('Numbers between 1 and 100 please!');
				guess.val('');
			};
	};

});

$(document).on("click","#new",function(){
	clearGuesses();
	playGame();
});

$(document).on("click",".new-game",function(){
	clearGuesses();
	playGame();
});

});



