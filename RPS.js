
        // loading scores from local storage

		let score = JSON.parse(localStorage.getItem('score')) || {
	        wins: 0,
		    losses: 0,
		    ties: 0
		}

		updateScore();


       /*
		if (!score) {
			wins: 0,
		    losses: 0,
		    ties: 0
		}*/

		console.log();

		let isAutoPlalying = false;
		let intervalId;
		function autoplay() {
			if (!isAutoPlalying) {
				intervalId = setInterval(function () {
				const playerMOve = pickComputerMove();
				playGame(playerMOve);
			  }, 1000);
				isAutoPlalying = true;
			} else{
				clearInterval(intervalId);
				isAutoPlalying = false;
			}
		}

		//play with keywords
		document.body.addEventListener('keydown', (event) => {
			if (event.key === 'r') {
				playGame('rock');
			} else if (event.key === 'p') {
				playGame('paper');
			} else if (event.key === 's') {
				playGame('scissors');
			}
		});

		// use this instead of onclick="" on the html buttons

		/*document.querySelector('.js-rock-button')
		.addEventListener('click', () => {
			playGame('rock');
		});

		document.querySelector('.js-paper-button')
		.addEventListener('click', () => {
			playGame('paper');
		});

		document.querySelector('.js-scissors-buttom')
		.addEventListener('click', () => {
			playGame('scissors');
		});*/
		  

	    function playGame(playerMOve) {

	    	const computerMove =  pickComputerMove();

		    let result = '';


	    	if (playerMOve === "scissors") {
	    		
		        if (computerMove === 'rock') {
		        	result = 'you lose';
		        } else if (computerMove === 'paper') {
		        	result = 'you wine';
		        } else if (computerMove === 'scissors') {
		        	result = 'Tie';
		        }
		       
	    	} else if (playerMOve === 'rock') {
		        if (computerMove === 'rock') {
		        	result = 'Tie';
		        } else if (computerMove === 'paper'){
		        	result = 'you lose';
		        } else if (computerMove === 'scissors'){
		        	result = 'you wine';
		        }
		      
	    	} else if (playerMOve === 'paper') {
		        if (computerMove === 'rock') {
		        	result = 'you wine';
		        } else if (computerMove === 'paper') {
		        	result = 'Tie';
		        } else if (computerMove === 'scissors') {
		        	result = 'you lose';
	            }
	        }


	        if (result === 'you wine') {
	        	score.wins += 1;
	        } else if (result === 'you lose') {
	        	score.losses += 1;
	        } else if (result === 'Tie') {
	        	score.ties += 1;
	        }

            // store scores in local storage 

	        localStorage.setItem('score', JSON.stringify(score));
            
            updateScore();

            document.querySelector('.js-result').innerHTML = `${result}`;

            document.querySelector('.js-moves').innerHTML = `you
     	<img src="images/${playerMOve}.png" class="move-icon">
     	<img src="images/${computerMove}.png" class="move-icon">
     	computer`
	       
	    	 /*alert(`you pick ${playerMOve}, computer pick ${computerMove}, ${result}
wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);*/
            
	    }

	    function updateScore() {
	    	document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;

	    }


		function pickComputerMove() {

			//Math.random() generate random numbers beteween 0 and 1
			const randomNumber = Math.random();
	        
			if (randomNumber >= 0 && randomNumber < 1 / 3) {
				computerMove = 'rock';
			} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
				computerMove = 'paper';
			} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
				computerMove = 'scissors';
			}
			return computerMove;
		}