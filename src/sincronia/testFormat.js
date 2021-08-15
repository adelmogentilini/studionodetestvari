const util = require('util')
const num = 1.1353640014972011e+110

console.log(num.toLocaleString('fullwide', { useGrouping: false }))

let a = '{"condizioni": {"EAN": "#NN#"},"pagina": 0,"numperpagina": 3}'
let b = {
  condizioni: {
    EAN: "#NN#"
  },
  pagina: 0,
  numperpagina: 3
}
console.log('a=')
console.log(a)
console.log('b=')
console.log(b)

try {

  console.log('typeof a === string ' + (typeof a === 'string'))
} catch (error) {
  console.log(error)
}
try {
  console.log('typeof b === string ' + (typeof b === 'string'))
} catch (error) {
  console.log(error)
}
try {
  console.log(`Parso a come JSON`)
  console.log(JSON.parse(a))
} catch (error) {
  console.log(`a non parsabile come JSON`)
}
try {
  console.log(`Parso b come JSON`)
  console.log(JSON.parse(b))
} catch (error) {
  console.log(`b non parsabile come JSON`)
}