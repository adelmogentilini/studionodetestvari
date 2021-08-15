const {sleep} = require("./testSincornia");
const {readUnLock} = require("./testSincornia");
const {readLock} = require("./testSincornia");
const {pippo} = require("./testSincornia");

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
