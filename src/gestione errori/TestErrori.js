

function addf(){
  try {
    throw Error('Pippo')
  }catch (e) {
    console.log("---------------------------------------")
    console.log(e)
    console.log("=======================================")
    console.log(e.message)

  }
}

addf()
