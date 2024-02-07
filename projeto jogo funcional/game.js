
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink )
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})



let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let scoreX = 0;
let scoreO = 0;

function drawBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.onclick = () => handleCellClick(i);
        cell.innerText = board[i];
        boardElement.appendChild(cell);
    }
}

function handleCellClick(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    drawBoard();

    if (checkWinner()) {
        displayWinner();
        updateScore();
        setTimeout(resetGame, 1500);
    } else if (board.every((cell) => cell !== "")) {
        // Empate
        setTimeout(resetGame, 1500);
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winPatterns.some((pattern) => {
        const [a, b, c] = pattern;
        return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
}

function displayWinner() {
    const winner = currentPlayer === "X" ? "X" : "O";
    alert(`Jogador ${winner} venceu!`);
}

function updateScore() {
    if (currentPlayer === "X") {
        scoreX++;
        document.getElementById("scoreX").innerText = scoreX;
    } else {
        scoreO++;
        document.getElementById("scoreO").innerText = scoreO;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    drawBoard();
}

drawBoard();





var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink )
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})