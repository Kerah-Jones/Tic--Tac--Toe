'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#restartButton').on('submit', gameEvents.onUpdateGame)
  $('#get-games').on('submit', gameEvents.onGetGame)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#board-game').hide()
})
