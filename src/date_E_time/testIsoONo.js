const dateformat = require("dateformat");

function getDateAsISO (data) {
  /**
   const cetOffsetInMilliseconds = 60 * 1000 * 60;
   const dt = new Date(data - cetOffsetInMilliseconds)
   return dateformat(dt, "yyyy-mm-dd'T'HH:MM'Z'") */

  return dateformat(data, 'UTC:yyyy-mm-dd\'T\'HH:MM\'Z\'')
}

const strdt = "2021-11-30T17:26Z"
const dt1 = new Date(strdt)
const dt2 = new Date()
const dt3 = new Date(dt2.toISOString())
const dt4 = new Date(getDateAsISO(dt2))
console.log(dt1.toLocaleTimeString())
console.log(getDateAsISO(dt2))
console.log(dt2.toISOString())
console.log(dt3)
console.log(dt4)
