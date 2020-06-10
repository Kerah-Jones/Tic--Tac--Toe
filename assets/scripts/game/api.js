// set paths to gather data from config and store
const config = require('./../config')
const store = require('./../store')

const newGameIndex = function (gamedata) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGameIndex
}
