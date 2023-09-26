const player_X = 'X';
const player_O = 'O';
const emptycell = '';
let currentPlayer = player_X;
let board = Array(9).fill(emptycell);
let gameOver = false;
      
function cell(index) {
    if (board[index] === emptycell && !gameOver) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkGameOver();
        currentPlayer = currentPlayer === player_X ? player_O : player_X;
        if (currentPlayer === player_O && !gameOver) {
            setTimeout(makeAIMove, 500);
        }
    }
}
function makeAIMove() {
    let availableCells = board.reduce((acc, cell, index) => {
        if (cell === emptycell) {
            acc.push(index);
        }
        return acc;
    }, []);

    if (availableCells.length > 0 && !gameOver) {
        let randomIndex = Math.floor(Math.random() * availableCells.length);
        let cellIndex = availableCells[randomIndex];
        cell(cellIndex);
    }
}

function checkGameOver() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (board[a] !== emptycell && board[a] === board[b] && board[b] === board[c]) {
            gameOver = true;
            setTimeout(() => {
                alert(`Player ${board[a]} wins!`);
            }, 100);
            break;
        }
    }

    if (!board.includes(emptycell) && !gameOver) {
        gameOver = true;
        setTimeout(() => {
            alert("It's a tie!");
        }, 100);
    }
}

