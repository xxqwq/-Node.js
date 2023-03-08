const express = require("express")
const app = express()
const router = require("./2.编写get接口")
const postApi = require("./3.编写post接口")
const cors = require("cors")
app.use(cors())
//配置解析表单数据的中间
app.use(express.urlencoded({ extended: false }))
app.use("/api", router)
app.use("/api", postApi)
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})