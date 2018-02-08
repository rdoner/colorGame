var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listener to squares
		squares[i].addEventListener("click", function() {

		//grab color of picked square
		var clickedColor = this.style.backgroundColor; 
		//compare color of picked square
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
				//change color of wrong square	
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try again!"
			}
		});
	}
}

function reset() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color) {
	//loop through all squares
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color
}

function pickColor() {
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);
	// use that number to access the color out of this array and return that color
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i=0; i<num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//model string "rgb" = (r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}