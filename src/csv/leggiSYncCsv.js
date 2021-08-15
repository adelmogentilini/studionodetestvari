const fs = require("fs");

function readCsv(filename){
  const csv = []
  const fileread = fs.readFileSync(filename)

  console.log(filename)
  console.log(Buffer.from(fileread).toString())
  const rows = Buffer.from(fileread).toString().split('\n')
  const testa = rows[0].split(';')
  for(let i=1; i< rows.length; i++){
    const riga = rows[i].split(';')
    if(riga.length == testa.length){
      csv.push(rows[i].split(';'))
    }
  }
  return csv
}


const righe = readCsv('Clienti_zaninisanpietroingu.csv')
console.log(righe.length)
console.log(righe[0])
console.log(righe[1])
console.log(righe[righe.length-1])
