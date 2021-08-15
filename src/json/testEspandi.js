const a = {
  pIpPo: "pluto",
  Pec: "pecc",
  Palla: ['a', 'BB', { C: 'c maiuscolo', cC: 'cminuscolo' }],
  CAsa: {
    Muro: 'muro',
    Inglese: 'WALL'
  }
};

console.log(a);
console.log(`a vala ${a}`)
console.log(`a vale ${JSON.stringify(a)}`)

console.log(normalizza(a))

function normalizza(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const norm = {};
  Object.keys(obj).forEach((el) => {
    if (Array.isArray(obj[el])) {
      let temp = []
      obj[el].forEach((elarr) => {
        temp.push(normalizza(elarr))
      })
      norm[el.toLowerCase()] = temp
    } else if (typeof obj[el] === "object") {
      norm[el.toLowerCase()] = normalizza(obj[el])
    } else {
      norm[el.toLowerCase()] = obj[el]
    }
  })
  return norm
}