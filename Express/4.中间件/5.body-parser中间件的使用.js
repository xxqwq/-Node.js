const express = require("express")
const app = express()
const parser = require("body-parser")
app.use(parser.urlencoded({ extended: false }))
app.post("/user", (req, res) => {
    console.log(req.body)
    res.send("ok")
})
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})