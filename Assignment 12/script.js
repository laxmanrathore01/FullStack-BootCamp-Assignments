// Game state variables
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 board
let currentPlayer = 'X'; // 'X' or 'O'
let gameActive = true; // True if the game is ongoing, false if won or drawn

// DOM elements
const cells = document.querySelectorAll('.cell'); // All the individual cells
const statusDisplay = document.getElementById('status'); // Element to display game status
const resetButton = document.getElementById('resetButton'); // The reset button

// Winning conditions: combinations of cell indices that result in a win
const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6]  // Diagonal from top-right
];

/**
 * Handles a click event on a game board cell.
 * @param {Event} clickedCellEvent - The click event object.
 */
function handleCellClick(clickedCellEvent) {
    // Get the clicked cell element
    const clickedCell = clickedCellEvent.target;
    // Get the index of the clicked cell from its data-cell-index attribute
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    // If the cell is already filled or the game is not active, do nothing
    if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Update the game board array and the cell's visual content
    gameBoard[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Add a class to style the X or O mark
    if (currentPlayer === 'X') {
        clickedCell.classList.add('x-mark');
    } else {
        clickedCell.classList.add('o-mark');
    }

    // Check for win or draw after the move
    handleResultValidation();
}

/**
 * Checks if the current game state results in a win or a draw.
 */
function handleResultValidation() {
    let roundWon = false;

    // Iterate through all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        // Get the values in the cells corresponding to the current winning condition
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];

        // If any of the cells are empty, continue to the next condition
        if (a === '' || b === '' || c === '') {
            continue;
        }
        // If all three cells in the condition are the same, a win is detected
        if (a === b && b === c) {
            roundWon = true;
            // Highlight the winning cells
            winCondition.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
            break; // Exit the loop as a win is found
        }
    }

    // If a win is detected
    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false; // End the game
        return;
    }

    // If no win is detected, check for a draw (all cells filled)
    let roundDraw = !gameBoard.includes(''); // True if no empty cells remain
    if (roundDraw) {
        statusDisplay.textContent = 'It\'s a Draw!';
        gameActive = false; // End the game
        return;
    }

    // If no win or draw, switch to the next player
    handlePlayerChange();
}

/**
 * Switches the current player from 'X' to 'O' or vice-versa.
 */
function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

/**
 * Resets the game to its initial state.
 */
function handleResetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '']; // Clear the board array
    gameActive = true; // Set game to active
    currentPlayer = 'X'; // Start with Player X
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`; // Update status display

    // Clear content and remove styling from all cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x-mark', 'o-mark', 'winning-cell');
    });
}

// Event listeners
// Add click listener to each cell
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// Add click listener to the reset button
resetButton.addEventListener('click', handleResetGame);
