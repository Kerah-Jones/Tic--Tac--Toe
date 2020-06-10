// api files for import
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// Game event functions
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

module.exports = {
  onNewGame
}
