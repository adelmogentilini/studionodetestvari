const bcrypt = require('bcrypt')

let pass = 'la mia password chi lo sa'
let saltRounds = 7
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(pass, salt);

console.log(hash)
console.log(bcrypt.compareSync(pass, hash))
console.log(bcrypt.compareSync(pass+'w', hash))

const obj1 = {
  passwd: 'ciao a tutti'
}

const obj2 = {... obj1}

obj2.passwd = bcrypt.hashSync(obj2.passwd, hash)
console.log(obj1)
console.log("*****************************")
console.log(obj2)
