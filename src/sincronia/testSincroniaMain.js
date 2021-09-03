const {sleep} = require("./testSincronia");
const {readUnLock} = require("./testSincronia");
const {readLock} = require("./testSincronia");
const {pippo} = require("./testSincronia");

async function main(){
  for (let i =0; i<5000; i++){
    pippo()
  }
  console.log('ATTIVATI')
  console.log('LOCKING: '+readLock())
  console.log('UNLOCKING: '+readUnLock())
  await sleep(10000)
  console.log('LOCKING: '+readLock())
  console.log('UNLOCKING: '+readUnLock())

}

main()
