const express = require("express")
const app = express()

//注意：除了错误级别的中间件，其他的中间件必须在路由之前进行配置
app.use(express.json())
app.post("/user", (req, res) => {
    //服务器可以使用req.body这个属性来接受客户端发送过来的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    res.send("ok")
})
app.use(express.urlencoded({ extended: false }))
app.post("/book", (req, res) => {
    //服务器可以使用req.body这个属性来接受客户端发送过来的请求体数据
    console.log(req.body)
    res.send('ok')
})
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})