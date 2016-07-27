function NewGame() {
    this.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

//Check Winner 
NewGame.prototype.checkWinner = function() {
    //here is where we compare the userChices 
}

function SolutionMaker(name) {
    //we are going to push the solutions of myGame to an array
    this.name = name;
    this.solution = {};
}

function AddSolution(solName, val1, val2, val3){
    this.possibleSolution = solName;
    var arraySolution = [];
    for(var i = 0; i < 3; i++) {
        arraySolution.push(val1);
    }
    return arraySolution;
}

var myGame = new NewGame();

var val = myGame.board = [
    [0, 1, 2],
    [1, 1, 0],
    [2, 1, 0]
];

console.log(val);

var horz1 = new AddSolution('horz1', myGame.board[0][0], myGame.board[0][1], myGame.board[0][2]);
var horz2 = new AddSolution('horz2', val[1][0], val[1][1], val[1][2]);
var horz3 = new AddSolution('horz3', val[2][0], val[2][1], val[2][2]);
var vert1 = new AddSolution('vert1', val[0][0], val[1][0], val[2][0]);
var vert2 = new AddSolution('vert2', val[0][1], val[1][1], val[2][1]);
var vert3 = new AddSolution('vert3', val[0][2], val[1][2], val[2][2]);
var diag1 = new AddSolution('diag1', val[0][0], val[1][1], val[2][2]);
var diag2 = new AddSolution('diag2', val[0][2], val[1][1], val[2][0]);
// console.log(horz1);