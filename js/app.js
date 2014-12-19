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
	var guessList = $('#guess-list');
	var winArea = $('.wins')
	var winStreak = 0;



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
		guessCounter = 0;
		$('#guess-list').empty();
		$('#guess-status').empty();
		$('input').val('');
	};

	/*-----starts a new game-----*/
	var playGame = function(){
		computerNumber = generateRandomNum();
		$('input').focus();
	};




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


	/*--Action on submit button click---*/
	$('.guess-submit').on('click',function(){
		guessStatus.text('');
		getGuess();
		guess.focus();
		userNumVal = parseInt(userNum);
		var difference = (computerNumber - userNumVal);
		var absDifference = Math.abs(difference);


	if (guessCounter < 8){
		if(userNumVal<101 && userNumVal >0){
			guessCounter ++;
			console.log("Guess count: "+guessCounter);
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
				winStreak ++;
				guess.val('');
				winArea.text('');
				winArea.append('Win Streak: '+winStreak);
			};
		}
		else {
			window.alert('Numbers between 1 and 100 please!');
			guess.val('');
		};
	}
	else {
		guessStatus.append('<p><span class="hot-status">GAME OVER!</span><br><span class="lower-text">You are only allowed 8 guesses! New game?</span></p>');
		winStreak = 0;
		winArea.text('');
		console.log(winStreak);
	};

	});


	/*----Action on enter------*/
	$('#guess').keypress(function(e) {
        if (e.which == 13) {
			guessStatus.text('');
			getGuess();
			guess.focus();
			console.log("User number = "+userNum);
			userNumVal = parseInt(userNum);
			var difference = (computerNumber - userNumVal);
			var absDifference = Math.abs(difference);


			if (guessCounter < 8){
				if (userNumVal<101 && userNumVal >0){
					guessCounter ++;
					console.log("Guess count: "+guessCounter);
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
						winStreak ++; 
						guess.val('');
						winArea.text('');
						winArea.append('Win Streak: '+winStreak);
						console.log(winStreak);
					};
				}
				else {
					window.alert('Numbers between 1 and 100 please!');
					guess.val('');
				};
			}
			else {
				guessStatus.append('<p><span class="hot-status">GAME OVER!</span></p><p><span class="lower-text">You are only allowed 8 guesses! <span id="new">New game?</span></span></p>');
				winStreak = 0;
				winArea.text('');
				console.log(winStreak);
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



