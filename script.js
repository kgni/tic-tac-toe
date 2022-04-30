// select all squares. Add eventlistener to squares

let board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];
let isGameOver = false;
let turn = 'player1';

const squares = Array.from(document.querySelectorAll('.square'));
const resetButton = document.querySelector('.reset-button');
const turnDisplay = document.querySelector('p');

for (square of squares) {
	square.addEventListener('click', (e) => {
		if (
			e.target.innerText === '' &&
			turn === 'player1' &&
			isGameOver === false
		) {
			e.target.innerText = 'X';
			console.log(e.target);
			turn = 'player2';
			turnDisplay.innerText = 'Player 2 turn';
		}

		if (
			e.target.innerText === '' &&
			turn === 'player2' &&
			isGameOver === false
		) {
			e.target.innerText = 'O';
			console.log(e.target);
			turn = 'player1';
			turnDisplay.innerText = 'Player 1 turn';
		}
	});
}

resetButton.addEventListener('click', () => {
	isGameOver = false;
	turn = 'player1';
	turnDisplay.innerText = 'Player 1 turn';
	squares.forEach((square) => (square.innerText = ''));
});

//

// class Game {
// 	constructor() {
// 		this.playerOne = 'X';
// 		this.playerTwo = 'O';
// 		this.isGameOver = false;
// 		this.turn = 'playerOne';
// 		this.board = [
// 			['', '', ''],
// 			['', '', ''],
// 			['', '', ''],
// 		];
// 	}
// }
