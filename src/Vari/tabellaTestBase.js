let a = undefined
let b = null
console.log("a vale " + a)
console.log("b vale " + b)
if (a) {
    console.log("if (a) = true")
} else {
    console.log("if (a) = false")
}
if (b) {
    console.log("if (b) = true")
} else {
    console.log("if (b) = false")
}
console.log("(!a) = " + (!a))
console.log("(!b) = " + (!b))
console.log("a != b " + (a != b))
console.log("a !== b " + (a !== b))

console.log("a === undefined " + (a === undefined))
console.log("a == undefined " + (a == undefined))
console.log("a != undefined " + (a != undefined))
console.log("a !== undefined " + (a !== undefined))
console.log("a === null " + (a === null))
console.log("a == null " + (a == null))
console.log("a != null " + (a != null))
console.log("a !== null " + (a !== null))

console.log("b === undefined " + (b === undefined))
console.log("b == undefined " + (b == undefined))
console.log("b != undefined " + (b != undefined))
console.log("b !== undefined " + (b !== undefined))
console.log("b === null " + (b === null))
console.log("b == null " + (b == null))
console.log("b != null " + (b != null))
console.log("b !== null " + (b !== null))

let c = 0
let d = "0"

console.log("c vale " + c)
console.log("d vale " + d + " carattere ")
console.log("!c = " + (!c))
console.log("!d = " + (!d))
console.log("c == d vale " + (c == d))
console.log("c === d " + (c === d))
console.log("isNaN(c) " + (isNaN(c)))
console.log("isNaN(d) " + (isNaN(d)))
console.log("c == null " + (c == null))

const res = {} + []
console.log(res)
const res2 = [] + {}
console.log(res2)