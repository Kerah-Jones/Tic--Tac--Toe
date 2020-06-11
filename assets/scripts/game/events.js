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

// // show game function
// const onShowGame = function (game) {
//   event.preventDefault()
//   console.log('show games')
//
//   const form = event.target
//   const data = getFormFields(form)
//   api.showGameIndex(data)
//
//     .then(ui.showGameSuccess)
//     .catch(ui.showGameFailure)
// }

module.exports = {
  onNewGame,
  onGetGame
  // onShowGame
}
