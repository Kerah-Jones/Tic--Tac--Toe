// Where all event functions live

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log(form)

  // import code from database using api.js
  api.signUpIndex(data)

  // read message when sucessful sign in or failure to sign in
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log(form)

  // import code from database using api.js
  api.signInIndex(data)

  // read message when sucessful sign in or failure to sign in
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out complete')

  const form = event.target
  const data = getFormFields(form)

  api.signOutIndex(data)

  // connect events funtions to ui messages for sign out
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const form = event.target
  const data = getFormFields(form)
  api.changePasswordIndex(data)

  // connect events funtions to ui messages for change password
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
