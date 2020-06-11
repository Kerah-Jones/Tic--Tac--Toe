// set paths to gather data from config and store
const config = require('./../config')
const store = require('./../store')

const newGameIndex = function (gameData) {
  console.log(gameData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGamesIndex = function (gameData) {
  console.log(gameData)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGameIndex = function (gameData) {
  console.log(gameData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
      data:{
        game: {
          cell: {
            index: 0,
            value: "x"
          },
      over: false
      }
    }
  })
}

module.exports = {
  newGameIndex,
  getGamesIndex
  updateGameIndex
}
