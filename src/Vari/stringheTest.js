const strtest = "CY0001"

function lpad(str, length, padString) {
	while (str.length < length)
		str = padString + str
	return str
}

function test1() {

	console.log(strtest.substring(2, strtest.length))
	let num = parseInt(strtest.substring(2, strtest.length)) + 1
	num = "CY" + lpad(num + '', '0', 5)
	console.log(num)
}

function testB64() {

	const str = 'pipp0'
	const str2 = Buffer.from(str).toString('base64')
	console.log(str)
	console.log(str2)

	if (Buffer.from(str, 'base64').toString('base64') === str) {

		console.log(str + ' è base64')
	} else {
		console.log(str + ' NON è base64')
	}
	if (Buffer.from(str2, 'base64').toString('base64') === str2) {
		console.log(str2 + ' è base64')
	} else {
		console.log(str2 + ' NON è base64')
	}
}

function testLpad() {
	console.log(lpad('ciao', 6, ' '))
	console.log(lpad('ciao', 6, '0'))
}

function testTipi() {
	let a = 1
	let b = '1'
	console.time("timer1")
	console.log(a == b)
	console.log(a === b)
	console.log(Number(a) == b)
	console.log(Number(a) === Number(b))
	console.timeLog("timer1")
	for (let i = 0; i < 1000000000; i++) {
		a++;
	}
	console.timeLog('timer1')
}
function indexoftest(){
	console.log("pippo e ok".indexOf("ok"))
	console.log("pippo e ok".indexOf("vai"))
}

function numero(){
	let pippo = '56C'
	console.log(!isNaN(pippo))
	var re = new RegExp('[0-9]+');
	var r  = pippo.match(re);
	console.log(r[0])
}

function repl(){
	let s1 = 'people.from.ibiza'

	console.log(s1)
	s1 = s1.replace('from', 'to')
	console.log(s1)
	s1 = s1.replace('ibiza', 'formentera')
	console.log(s1)
}

function splitTest(){
	const str = 'pippo.ciao'
	const parti = str.split('\.')
	console.log(parti)
}
//testB64()
//testLpad()
//testTipi()
//indexoftest()
//numero()
//repl()
splitTest()
