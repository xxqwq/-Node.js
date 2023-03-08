const express = require("express")
const app = express()
const router = require("./1.API接口")
app.use('/api', router)
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})