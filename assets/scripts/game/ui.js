
// export the store file
const store = require('./../store')

const newGameIndex = function (responseNewGame) {
  $('#message5').text('New Game Started!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  console.log("Let's Play!")
  store.game = responseNewGame.game
}

module.export = {
  newGameIndex
}
