let lockpippo = false
let locknum = 0
let nonlocknum = 0

async function pippo(){
  await sleep(2000)
  if(lockpippo){
    console.log('LOCKED')
    locknum++
    return
  }
  lockpippo = true
  nonlocknum++
  await sleep(5000+getRandomInt(10000))
  lockpippo = false
  return
}

function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function readLock(){
  return locknum
}
function readUnLock(){
  return nonlocknum
}
module.exports.readLock = readLock
module.exports.readUnLock = readUnLock
module.exports.pippo = pippo
module.exports.sleep = sleep
