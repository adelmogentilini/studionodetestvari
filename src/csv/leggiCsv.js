var fs = require('fs');
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream('Fornitori_zaninisanpietroingu.csv')
  .pipe(parse({delimiter: ';'}))
  .on('data', function(csvrow) {
    console.log(csvrow);
    console.log(csvrow[1])
    //do something with csvrow
    csvData.push(csvrow);
  })
  .on('end',function() {
    //do something with csvData
    // console.log(csvData);
    console.log(csvData.length)
  });

fs.createReadStream('Clienti_zaninisanpietroingu.csv')
  .pipe(parse({delimiter: ';'}))
  .on('data', function(csvrow) {
    console.log(csvrow);
    console.log(csvrow[1])
    //do something with csvrow
    csvData.push(csvrow);
  })
  .on('end',function() {
    //do something with csvData
    // console.log(csvData);
    console.log(csvData.length)
  });

