const fs = require("fs")

const filerecuperodati = "elenco_test.json"
async function recuperaDaJson(){
  try {
    let rawdata = fs.readFileSync(filerecuperodati);
    let clienti = JSON.parse(rawdata);
    console.log(clienti);
  }catch (e) {
    console.log(e)
  }finally {
    return "fatto"
  }
}

recuperaDaJson()
