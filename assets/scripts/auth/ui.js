
// export the store file
const store = require('./../store')

// will send messages of sucess and failure of Sign Up
const signUpSuccess = function (responseSignUp) {
  // reset when sign in sucessful
  $('#message').text('Sign Up Successful')
  $('form').trigger('reset')
  $('#message').css('color', 'green')
  $('#message').show('Sign Up Successful')
}
// message sign up unsucessful when requirements arent met
const signUpFailure = function (responseSignUp) {
  $('#message').text('Sign Up Failed')
  $('form').trigger('reset')
  $('#message').css('color', 'red')
}

// send message of sign in Successful
const signInSuccess = function (responseSignIn) {
  $('#message2').text('Sign In Successful')
  $('#message2').removeClass()
  $('#message2').addClass('success')
  $('#message4').hide('You Are Signed out!')
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#change-password').show()
  $('#new-game').show()
  $('#message2').css('color', 'green')
  store.user = responseSignIn.user
  console.log(responseSignIn)
}
// send failure message for sign in failure
const signInFailure = function (responseSignIn) {
  $('#message2').text('Sign In Failure')
  $('form').trigger('reset')
  $('#message2').css('color', 'red')
}

// send message when password is changed
const changePasswordSuccess = function (responseChangePassword) {
  $('#message3').text('Password Updated')
  $('form').trigger('reset')
  $('#message3').removeClass()
  $('#message3').addClass('success')
  $('#message3').css('color', 'green')
}

// send message when password fails to update
const changePasswordFailure = function (responseChangePassword) {
  $('#message3').text('Password Failed to Update')
  $('form').trigger('reset')
  $('#message3').removeClass()
  $('#message3').addClass('failure')
  $('#message3').css('color', 'red')
}

const signOutSuccess = function (responseSignOut) {
  $('#message4').text('You Are Signed out!')
  $('#message4').removeClass()
  $('#message4').addClass('success')
  $('#message4').css('color', 'green')
  $('form').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#board-game').hide()
  $('#sign-out').hide()
  $('#message').hide('Sign Up Successful')
  $('#message2').hide('Sign In Successful')
  $('#message4').show('You Are Signed out!')
  $('#message5').hide('New Game Started!')
  $('#message6').hide('Showing previous games')
  console.log('Sign Out Successful!')
  store.user = null
}

const signOutFailure = function (responseSignOut) {
  $('#message4').text('Error on sign out')
  $('#message4').removeClass()
  $('#message4').addClass('failure')
  $('#message4').css('color', 'red')
  console.error('signOut Error is :', responseSignOut)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
