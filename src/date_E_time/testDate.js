const dateformat = require('dateformat')
function getDateAsISO (data) {
  /**
   const cetOffsetInMilliseconds = 60 * 1000 * 60;
   const dt = new Date(data - cetOffsetInMilliseconds)
   return dateformat(dt, "yyyy-mm-dd'T'HH:MM'Z'") */

  return dateformat(data, 'UTC:yyyy-mm-dd\'T\'HH:MM\'Z\'')
}

console.log((new Date('01/01/2020')).toLocaleDateString())

console.log(new Date().toLocaleDateString()
)

const dt2 = new Date('2013-04-26T23:10:00.100Z')
console.log(dt2)
console.log("****************************************************")
const strdt = dateformat(dt2, "dd/mm/yyyy")
console.log(strdt)
console.log("****************************************************")
const dt3 = new Date()
console.log(dt3)
console.log(dt2.toLocaleString())
console.log(dt3.toLocaleString())
console.log(dt3.toUTCString())
const dt4 = new Date(getDateAsISO(dt3))
console.log(getDateAsISO(dt3))
console.log(dt4)
const dt5 = new Date('0')
console.log(dt5)
