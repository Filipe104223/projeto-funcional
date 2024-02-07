
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




document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    let gameOver = false;
  
    // Criação do tabuleiro
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
      }
    }
  
    function handleCellClick(event) {
      if (gameOver) return;
  
      const cell = event.target;
      if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWinner()) {
          alert(`${currentPlayer} venceu!`);
          gameOver = true;
        } else if (checkTie()) {
          alert('Empate!');
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          if (currentPlayer === 'O') {
            // Chama a função do bot aqui (ainda precisa ser implementada)
            playBotTurn();
          }
        }
      }
    }
  
    function checkWinner() {
      // Lógica para verificar se há um vencedor
      // Retorne true se houver um vencedor, caso contrário, retorne false
    }
  
    function checkTie() {
      // Lógica para verificar se o jogo empatou
      // Retorne true se for um empate, caso contrário, retorne false
    }
  
    function playBotTurn() {
      // Implemente a lógica do bot aqui
      // Por exemplo, escolha uma célula aleatória que ainda não foi preenchida
    }
  });

  function playBotTurn() {
    const emptyCells = Array.from(document.querySelectorAll('.cell')).filter(cell => cell.textContent === '');
    
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      setTimeout(() => {
        randomCell.textContent = currentPlayer;
        if (checkWinner()) {
          alert(`${currentPlayer} venceu!`);
          gameOver = true;
        } else if (checkTie()) {
          alert('Empate!');
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }, 500); // Adicionando um atraso para simular o tempo que o bot leva para tomar decisões (opcional)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente)
  
    // Adicione esta parte ao final do bloco DOMContentLoaded
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);
  
    function resetGame() {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.textContent = '';
      });
  
      currentPlayer = 'X';
      gameOver = false;
    }
  });

  function checkWinner() {
    const lines = [
      // Adicione as combinações vencedoras (linhas, colunas, diagonais)
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      const cellA = document.querySelector(`.cell[data-row="${a[0]}"][data-col="${a[1]}"]`);
      const cellB = document.querySelector(`.cell[data-row="${b[0]}"][data-col="${b[1]}"]`);
      const cellC = document.querySelector(`.cell[data-row="${c[0]}"][data-col="${c[1]}"]`);
  
      if (
        cellA.textContent !== '' &&
        cellA.textContent === cellB.textContent &&
        cellA.textContent === cellC.textContent
      ) {
        // Adiciona a classe 'winning' à div do tabuleiro
        document.getElementById('board').classList.add('winning');
  
        // Marca as células como vencedoras
        cellA.classList.add('winning');
        cellB.classList.add('winning');
        cellC.classList.add('winning');
  
        // Remove a classe 'winning' após a animação
        setTimeout(() => {
          document.getElementById('board').classList.remove('winning');
          cellA.classList.remove('winning');
          cellB.classList.remove('winning');
          cellC.classList.remove('winning');
        }, 1000); // Tempo da animação (em milissegundos)
  
        return true;
      }
    }
  
    return false;
  }

  // Adicione essas variáveis ao seu código JavaScript
let scoreX = 0;
let scoreO = 0;

// Dentro da função checkWinner, onde você identifica uma vitória, adicione:
function checkWinner() {
  // ... (seu código existente)

  if (
    cellA.textContent !== '' &&
    cellA.textContent === cellB.textContent &&
    cellA.textContent === cellC.textContent
  ) {
    // Adiciona a classe 'winning' à div do tabuleiro
    document.getElementById('board').classList.add('winning');

    // Marca as células como vencedoras
    cellA.classList.add('winning');
    cellB.classList.add('winning');
    cellC.classList.add('winning');

    // Incrementa o placar do jogador vencedor
    if (cellA.textContent === 'X') {
      scoreX++;
      document.getElementById('playerX').querySelector('.score-count').textContent = scoreX;
    } else {
      scoreO++;
      document.getElementById('playerO').querySelector('.score-count').textContent = scoreO;
    }

    // Remove a classe 'winning' após a animação
    setTimeout(() => {
      document.getElementById('board').classList.remove('winning');
      cellA.classList.remove('winning');
      cellB.classList.remove('winning');
      cellC.classList.remove('winning');
    }, 1000); // Tempo da animação (em milissegundos)

    return true;
  }

  return false;
}



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