console.log(`
-----------------------------------`)
const b1 = Buffer.alloc(10)
const b2 = Buffer.alloc(10, 257)

const b3 = Buffer.allocUnsafe(10)

const b4 = Buffer.from("abcdefg")

const b5 = Buffer.from([55,66,77])

let len = b1.write("abcd")

console.log(`[${b1.toString()}]`, "写入的字数：" + len)
console.log(b1.toJSON())

const b6 = Buffer.from("hello ")
const b7 = Buffer.from("nodejs")
const b8 = Buffer.concat([b6, b7])
console.log(b8.toString())

console.log(b6.compare(b7))

const b9 = Buffer.alloc(5)
b6.copy(b9)
console.log(b9.toString())

console.log(b8.slice(0, 8).toString())

console.log(`-----------------------------------
`)