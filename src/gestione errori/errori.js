function test(){

  console.log('ciao')
  const otperror = {
    statusCode: 20,
    message: 21,
    override: true,
    data: 'blablabla'
  }
  throw (new Error('error message'), otperror)
}


function main(){
  try{
    test()
  }catch (e) {
    console.log('error')
    console.log(e.statusCode)
    console.log(e)
  }
}


main()
