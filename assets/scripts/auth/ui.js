
// export the store file
const store = require('./../store')

// will send messages of sucess and failure of Sign Up
const signUpSuccess = function (responseSignUp) {
  // reset when sign in sucessful
  $('#message').text('Sign Up Successful')
  $('form').trigger('reset')
}
// message sign up unsucessful when requirements arent met
const signUpFailure = function (responseSignUp) {
  $('#message').text('Sign Up Failed')
  $('form').trigger('reset')
}

// send message of sign in Successful
const signInSuccess = function (responseSignIn) {
  $('#message2').text('Sign In Successful')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  $('form').trigger('reset')
  store.user = responseSignIn.user
}
// send failure message for sign in failure
const signInFailure = function (responseSignIn) {
  $('#message2').text('Sign In Failure')
  $('form').trigger('reset')
}

// send message when password is changed
const changePasswordSuccess = function (responseChangePassword) {
  $('#message3').text('Password Updated')
  $('form').trigger('reset')
  $('#message3').removeClass()
  $('#message3').addClass('success')
}

// send message when password fails to update
const changePasswordFailure = function (responseChangePassword) {
  $('#message3').text('Password Failed to Update')
  $('form').trigger('reset')
  $('#message3').removeClass()
  $('#message3').addClass('failure')
}

const signOutSuccess = function (responseSignOut) {
  $('#message4').text('You Are Signed out!')
  $('#message4').removeClass()
  $('#message4').addClass('success')
  $('form').trigger('reset')
  console.log('Sign Out Successful!')
  store.user = null
}

const signOutFailure = function (responseSignOut) {
  $('#message4').text('Error on sign out')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  console.error('signOut Error is :', responseSignOut)
}

const newGameIndex = function (responseNewGame) {
  $('#message5').text('New Game Started!')
  $('#message5').removeClass()
  $('#message5').addClass('success')
  console.log("Let's Play!")
  store.game = responseNewGame.game
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameIndex
}
