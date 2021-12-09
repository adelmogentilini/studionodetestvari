const url = require("url");
const urlstring = "http://loclahost:3000/api/path"

const ret = new url.URL(urlstring)
console.log(ret)
