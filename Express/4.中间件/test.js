const express = require("express")
const app = express()
const customBodyParser = require('./6.custom-body-parser')

app.use(customBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})