let fs = require("fs")

let rs = fs.createReadStream("q.txt")

rs.on("error", function (err) {
    console.log(err.message)
})