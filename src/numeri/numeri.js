  let prezzoUnitarioNetto = 32.40 / 3
  let aliquotaPerc = 20
  prezzoUnitarioNetto = prezzoUnitarioNetto + prezzoUnitarioNetto * (aliquotaPerc / 100)
  let unit = 12.32332
  let totalTtc = 15.3452
  totalTtc = 15.3453 + 15.3453 * (aliquotaPerc / 100)
  let tva = aliquotaPerc

  let calculatedTva = totalTtc - totalTtc

  console.log(Number(totalTtc.toFixed(2)))
  console.log(unit.toFixed(2))



  const a = 10.34
  const b = '10.34'
  const c = 9.81
  const d = '9.81'


  console.log(a-c)
  console.log(a-d)
  console.log(b-c)
  console.log(b-d)
  console.log(Number(a) - Number(c))
  console.log(Number(a) - Number(d))

  console.log((a-c).toFixed(2))
