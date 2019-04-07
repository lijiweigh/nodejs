let express = require("express")
let path = require("path")
let app = express()


app.use(express.static(path.join(__dirname, "../../src")))
app.use(express.static(path.join("c:", path.sep, "code2", path.sep, "imgs")))
app.get("/hello", function (req, res) {
    res.send({
        name: "tom",
        age: 18
    })
})

app.listen((3000), () => {
    console.log('App listening on port 3000!');
});