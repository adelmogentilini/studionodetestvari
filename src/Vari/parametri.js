async function a(params, options) {
  params.pippo = 10
}

async function b(body) {

  let params = body
  console.log(params)
  await a(params)
  console.log(params)

}

console.log('START ...')
b({ a: "ciao" })