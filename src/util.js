const fs = require("fs")
function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
// esporto
module.exports.sleep = sleep
