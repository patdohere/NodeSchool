var q = require('q');
var defer = q.defer();
// defer.promise is the actual promise itself
// defer.promise.then is the "Q" way of attaching a then handler

function printMessage(message) {
  console.log(message)
}

function successHandler(message) {
  printMessage(message)
}

function failureHandler(error) {
  printMessage(error.message)
}

defer.promise.then(
  successHandler, failureHandler
)

setTimeout(defer.reject, 300, new Error("REJECTED!"))
