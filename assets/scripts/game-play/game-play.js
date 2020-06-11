// board and player set up
const resetBoard
const user = 'O'
const computer = 'X'
// these are the combinations that the player can win
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

// this is to set up the selectors in the board with a class of cell

const cells = document.querySelectorAll('.cell')
replayGame()

// .endgame will reset board when game is over
function replayGame () {
  document.querySelector('.endgame').style.display = 'none'
  // this tells the comouter to count off numbers 1-9
  resetBoard = Array.from(Array(9).keys())
  // this will remove all of the X and O from the board when game is restarted
  for (let i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false)
  }
}

function turnClick(square) {
  console.log(square.target.id)
}

module.exports= {

}
