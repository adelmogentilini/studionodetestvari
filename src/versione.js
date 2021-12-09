/**
 * Mantenere aggiornata la versione e il rilascio in questo file
 * @returns {{versione: string, rilasciata: string}}
 */
const fs = require('fs')
const VERSIONE = {    versione: "1.0.6",
    rilasciata: "Settembre 2021"
  }


function changeVersion(){
  let fileversion = Buffer.from(fs.readFileSync(__dirname+"/versione.js")).toString()
  let re = new RegExp('[0-9]+\\.[0-9]+[\\.]*[0-9]*');
  let r  = fileversion.match(re);
  if(r){
    const parti = (r[0].toString()).replace(/\./g, ",").split(",")
    parti[parti.length-1] =""+(Number(parti[parti.length-1])+1)
    const newVersion = parti.join().replace(/,/g,".")
    fileversion = fileversion.replace(r[0], newVersion)
    fs.writeFileSync(__dirname+"/versione.js", fileversion)
  }
}

module.exports.changeVersion = changeVersion
module.exports.versione = VERSIONE
