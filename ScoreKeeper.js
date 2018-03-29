
// JAVA SCRIPT LOGIC FOR THE GAME!



var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");

var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");

var p3Button = document.querySelector("#p3");
var p3Display = document.querySelector("#p3Display");

var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");


var p1Score = 0;

var p2Score = 0;

var p3Score = 0;



var gameOver = false;
var winningScore = 10;



p1Button.addEventListener("click", function(){
	if(!gameOver) {

		p1Score++;
		if(p1Score === winningScore){


			p1Display.classList.add("winner");	
			gameOver = true;
		}

		p1Display.textContent = p1Score;

	}
	
	
});




p2Button.addEventListener("click", function(){
	if(!gameOver){

		p2Score++;
		if(p2Score === winningScore){

			p2Display.classList.add("winner");	
			gameOver = true;

			

		}

		p2Display.textContent = p2Score;
	}

});




p3Button.addEventListener("click", function(){
	if(!gameOver){

		p3Score++;
		if(p3Score === winningScore){

			p3Display.classList.add("winner");	
			gameOver = true;
		}

		p3Display.textContent = p3Score;

	}

	
	
});



resetButton.addEventListener("click", function(){

	reset();

	
	});

function reset(){
	p1Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");

	p2Score = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");

	p3Score = 0;
	p3Display.textContent = 0;
	p3Display.classList.remove("winner");

	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})
