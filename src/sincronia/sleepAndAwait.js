const {sleep} = require("../util");


async function main(){
  const start = new Date()
  console.log(new Date())
  await sleep(5000)
  console.log(new Date())
  await sleep(10000)
  const end = new Date()
  console.log("END: "+(end-start))

}

main()
