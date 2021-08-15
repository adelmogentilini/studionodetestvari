const src = {
  Produttore: true,
  Grossista: false,
  Marche: ['Hankook'],
  Descrizione: 'Hankook',
  DocumentId: 'A2',
  Variant: '2',
  TransportPriority: 'RUSH',
  BuyerParty: {
    PartyID: '951246',
    AgencyCode: '91'
  },
  Consignee: [{
    Descrizione: 'Punto 1',
    PartyID: '951246',
    AgencyCode: '91'
  }],
  connection: {
    AUTH: {
      type: 'BASIC',
      username: 'PICASSO',
      password: 'PICASSO"'
    },
    URL: "http://euedi.hankooktire.com/Test-All/getOrder.aspx",
  }
}


console.log(JSON.stringify(src))
let strtest = "ciao a "
console.log(strtest)
console.log(strtest.substring(0, 10))
strtest = "ciao a tutti belli e brutti\""
console.log(strtest)
console.log(strtest.substring(0, 10))
