$(document).ready(function() {
/*

var board = [
	[1, 0, null],
	[null, 0, null],
	[1, 0, null]
];


	//Steps 

	// On click we append X or O 
	// clicks alternate between X and next time is O
		// dbclick click 
		// keyCode x = 88 o = 79

	// if (square = 'blank') {
		//then allow click event handler
	//} else { do not alow a click // send a alert( this is square is not empty)}

	//a variable that show whos turn it is

	//funciton switches player (X or O)

	// also append instructions at all time 

	//when does the computer know when a player wins 
		function Winner() {
			if()
		}
	// a constructor that creates WIN states 

	//everytime the state of the board changes we call a function that cecks if the current bord state matches a
	win state 


			A 			B 			C
		1 	A1			B1			C1

		2	A2			B2			C2

		3	A3			B3			C3	

	//Define Wining states :

	 	horizontal cases : 
	 		[A1, B1, C1]  
	 		[A2, B2, C2] 
	 		[A3, B3, C3] 

	 	vertical cases :

	 		[A1, A2, A3] 
	 		[B1, B2, B3]
	 		[C1, C2, C3] 

	 	diagonal cases : 

	 		[A1, B2, C3]
	 		[A3, B2, C1]
*/

	// On click we append X or O 
	// clicks alternate between X and next time is O
		// dbclick click 
		// keyCode x = 88 o = 79

	// 2 things to consider : 

		// only being avail to fill black squares 

		// alternating appending X or O on click 

	///Whose turn it is?
		//X's turn
			//wherever he clicks it will turn to X
				//can he click anywhere? (including opponent's squares)
				//canc he only click on blank squares 
					// property black to true or false
					// $(square).css('black/clickable', 'false')
					//square - > click square -> square gains "X" class; "X" class has a property where it cannot be clicked
/* turn ON a class 
.x-class {
	content: "x";
	property?:unclickable?;
}

div.x-class).text()x

function Player(name, score, color, symbol) {
	this.name = name;
	this.score = score;
	this.color = color;
	this.symbol = symbol;
}

player.prototype.clickable = function(){

	
}

var playerX = new Player();

var playerO = new Player();

playerX.clickable();

playerO.clickable();


*/

var turnCounter = 1;
var currentPlayer = 'X';

	$('.main').on('click', '.square', function(){
		if(turnCounter % 2 === 0){
			currentPlayer = 'O';
			// playerX.turn();
		} else {
			currentPlayer = 'X';
		}
		$(this).text(currentPlayer);

		turnCounter++;
	});




});