const dateformat = require("dateformat");

function test1() {
  const a = "20210601"
  const b = "20210602"

  let date1;
  date1 = new Date();
  date1.setFullYear(a.substring(0, 4), a.substring(4, 6) - 1, a.substring(6))
  let date2;
  date2 = new Date();
  date2.setFullYear(b.substring(0, 4), b.substring(4, 6) - 1, b.substring(6))
  date2.setHours(0, 0, 0)
  date2.setDate(date2.getDate() + 1)
  console.log(date2 - date1)
  for (let d = date1; d < date2; d.setDate(d.getDate() + 1)) {
    console.log(d.toString())
    console.log(dateformat(d, 'yyyymmdd'))
  }

}

function test2() {
  const data = new Date()
  console.log(data)
  const data2 = new Date(data.getTime()+3*60000)
  console.log(data2)
  const data3 = new Date(data.getTime()+30000)
  console.log(data3)
  console.log("---------------")
  console.log("=>>>"+timestampToSecond(data2, data))
  console.log("=>>>"+timestampToSecond(data3, data))

}

function timestampToSecond(timestamp, nowTimeStamp) {
  const diff = Math.abs((nowTimeStamp.getTime() - timestamp.getTime()) / 60000)
  let retdate
  if(diff > 1){
    retdate = new Date(Math.min(timestamp.getTime(), nowTimeStamp.getTime()) + 60000)
  }else{
    retdate = new Date(Math.min(timestamp, nowTimeStamp))
  }
  retdate.setSeconds(0)
  return retdate
}

function test3(){
  const strdate = '2021-06-07T12:06Z'
  const dt = new Date(strdate)
  console.log(dt.toString())
  console.log(getSqlStringForDate(dt))
}


function test4(){
  const strdate = '10/06/2021'
  const testdt = new Date('2021-06-09')
  const dt =stringToDate(strdate, 'dd/mm/yyyy','/')
  var formatedDate = new Date(2021,5, 10);
  console.log(dt)
  console.log(testdt)
  console.log(formatedDate.toLocaleDateString())
}

function getSqlStringForDate (valore) {
  const tempdate = new Date(valore)
  let indexSpazio = 0
  if (typeof valore === 'string') {
    indexSpazio = valore.indexOf('T')
  }
  if (indexSpazio > -1) {
    return `SMALLDATETIMEFROMPARTS(${tempdate.getUTCFullYear()}, ${tempdate.getUTCMonth() + 1}, ${tempdate.getUTCDate()},${tempdate.getHours()}, ${tempdate.getUTCMinutes()})`
  } else {
    return `SMALLDATETIMEFROMPARTS(${tempdate.getUTCFullYear()}, ${tempdate.getUTCMonth() + 1}, ${tempdate.getUTCDate()}, 0, 0)`
  }
}
function test5(){
  const timestampScad = '2021-07-29T13:55Z'
  const step = '60000'
  const dt = new Date(timestampScad)
  const dt2 = new Date(dt.getTime()-4*step)

  const oraEsecuzione  = new Date(Date.now())

  console.log(dt)
  console.log(dt2)
  console.log(oraEsecuzione)

}

function stringToDate(_date,_format,_delimiter)
{
  var formatLowerCase=_format.toLowerCase();
  var formatItems=formatLowerCase.split(_delimiter);
  var dateItems=_date.split(_delimiter);
  var monthIndex=formatItems.indexOf("mm");
  var dayIndex=formatItems.indexOf("dd");
  var yearIndex=formatItems.indexOf("yyyy");
  var month=parseInt(dateItems[monthIndex]);
  month-=1;
  var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
  return formatedDate;
}
test5()

