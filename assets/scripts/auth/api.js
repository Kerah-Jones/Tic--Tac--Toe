// where the data base is imported

// set paths to gather data from config and store
const config = require('./../config')
const store = require('./../store')
// // //
// // // // get data and store in database that meet the correct credentials
const signUpIndex = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password,
        password_confirmation: data.credentials.password_confirmation
      }
    }
  })
}

const signInIndex = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: data.credentials.email,
        password: data.credentials.password
      }
    }
  })
}

const signOutIndex = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePasswordIndex = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Taken token=' + store.user.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}

// Game api functions

const newGameIndex = function (gamedata) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/new-game',
    headers: {
      Authorization: 'Taken token=' + store.user.token
    }
  })
}

// const newGameIndex2 = function (gamedata) {
//   const apiCall = {
//     method: 'POST',
//     url: config.apiUrl + '/new-game',
//     data: {
//       credentials: {
//         email: gamedata.credentials.password,
//         password: gamedata.credentials.password
//       }
//     }
//   }
//   console.log(config.apiUrl)
//   console.log(apiCall)
//   return $.ajax(apiCall)
// }

module.exports = {
  signUpIndex,
  signInIndex,
  changePasswordIndex,
  signOutIndex,
  newGameIndex
}
