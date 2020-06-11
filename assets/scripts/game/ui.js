
// export the store file
const store = require('./../store')

// create games functions
const newGameSuccess = function (responseNewGame) {
  console.log(responseNewGame)
  $('#message5').text('New Game Started!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  $('form').trigger('reset')
  console.log("Let's Play!")
  store.game = responseNewGame.game
}
const newGameFailure = function (responseNewGame) {
  $('#message5').text('New Game failed to start')
  $('#message5').removeClass()
  $('#message5').addClass('failure')
  $('form').trigger('reset')
  console.log('Failure to Start Game!')
}
//
// // get all games functions
// const getGameSuccess = function (responseNewGame) {
//   console.log(responseNewGame)
//   $('#message6').text('Here are all of your games!')
//   $('#message6').removeClass()
//   $('#message6').addClass('success')
//   $('form').trigger('reset')
//   console.log('Here are your games!')
// }
const getGameFailure = function (responseNewGame) {
  $('#message6').text('Not able to show games')
  $('#message6').removeClass()
  $('#message6').addClass('failure')
  $('form').trigger('reset')
  console.log('Failure to show games!')
}
// get games functions
const getGameSuccess = function (responseShowGame) {
  $('#message6').text('Showing previous games')
  // $('#message6').removeclass()
  // $('#message6').addclass('success')
  console.log('show games working')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getGameSuccess,
  getGameFailure
  // showGameSuccess
}
