function fromObjectToQuery() {
  const oggetto = {
    pippo: 1,
    pluto: 3,
    casa: 'ciao'
  }

  console.log(oggetto)
  const arr = (Object.keys(oggetto).map(el => el + '=' + oggetto[el]))
  console.log(arr)
  const reducer = (previousValue, currentValue) => previousValue + "&" + currentValue;
  console.log(arr.reduce(reducer))
}



fromObjectToQuery()