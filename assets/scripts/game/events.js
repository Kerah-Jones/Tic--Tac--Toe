// api files for import
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// Create Game event functions
const onNewGame = function (game) {
  event.preventDefault()
  console.log('start game ran')

  // collect data from api
  const form = event.target
  const data = getFormFields(form)
  api.newGameIndex(data)

  // connect event functions to the ui messages for New Game
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetGame = function (game) {
  event.preventDefault()
  console.log('get games ran')

  // collect data from api
  const form = event.target
  const data = getFormFields(form)
  api.getGamesIndex(data)

  // connect event functions to the ui messages for New Game
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

// // // update game function
const onUpdateGame = function (game) {
  event.preventDefault()
  console.log('update games')

  const form = event.target
  const data = getFormFields(form)
  api.updateGameIndex(data)

    .then(ui.updateGameSuccess)
    // .catch(ui.updateGameFailure)
}



// play game code

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const turnSelectorElement = document.querySelector('turnMessage')
const turnMessageTextElement = document.querySelector('[turn-selector]')
let circleTurn
let xTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame () {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick (e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
    turnSelectorMessage()
  }
}

function endGame (draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? 'O' : 'X'} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw () {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark (cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns () {
  circleTurn = !circleTurn
}

function setBoardHoverClass () {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function turnSelectorMessage () {
  if (circleTurn) {
    turnMessageTextElement.innerText = `${circleTurn ? 'O' : 'X'} turn!`
  }else{}
  } else {
    turnMessageTextElement.classList.add('show')
  }
}

function checkWin (currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

module.exports = {
  onNewGame,
  onGetGame,
  cellElements,
  board,
  winningMessageElement,
  restartButton,
  winningMessageTextElement,
  onUpdateGame,
  turnSelectorElement,
  turnMessageTextElement
}
