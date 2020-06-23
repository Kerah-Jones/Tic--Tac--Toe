
// export the store file
const store = require('./../store')

// create games functions
const newGameSuccess = function (responseNewGame) {
  console.log(responseNewGame)
  $('#message5').text('New Game Started!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  $('#message5').css('color', 'green')
  $('form').trigger('reset')
  console.log("Let's Play!")
  $('#board-game').show()
  $('#change-password').hide()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.game = responseNewGame.game
  store.game.currentTurn= 'x'
}
const newGameFailure = function (responseNewGame) {
  $('#message5').text('New Game failed to start')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
  $('#message5').css('color', 'red')
  $('form').trigger('reset')
  console.log('Failure to Start Game!')
}

const getGameFailure = function (responseNewGame) {
  $('#message6').text('Not able to show games')
  $('#message6').removeClass()
  $('#message6').addClass('failure')
  $('#message6').css('color', 'red')
  $('form').trigger('reset')
  console.log('Failure to show games!')
}
// get games functions
const getGameSuccess = function (responseShowGame) {
  $('#message6').text('Showing previous games')
  $('#message6').css('color', 'green')
  console.log('show games working')
}
const getGameSuccess = function (responseShowGame) {
  $('#message6').text('Showing previous games')
  $('#message6').css('color', 'green')
  console.log('show games working')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getGameSuccess,
  getGameFailure

}
