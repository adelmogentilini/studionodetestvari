const dateformat = require('dateformat')
function getDateAsISO (data) {
  /**
   const cetOffsetInMilliseconds = 60 * 1000 * 60;
   const dt = new Date(data - cetOffsetInMilliseconds)
   return dateformat(dt, "yyyy-mm-dd'T'HH:MM'Z'") */

  return dateformat(data, 'UTC:yyyy-mm-dd\'T\'HH:MM\'Z\'')
}

let str = "2020-04-21"
let dt = new Date(str)
console.log(dt)
