const express = require("express")
const app = express()
const qs = require("querystring")
//定义中间件
app.use((req, res, next) => {
    //定义中间件的业务逻辑
    //定义变量，用来存储客户端发送过来的请求体数据
    let str = ''
    //监听req的data事件
    req.on("data", (chunk) => {
        str += chunk
    })
    //监听req的end事件
    req.on("end", () => {
        //存放的是完整的请求体数据

        //把字符串格式的请求体数据解析成对象格式
        const body = qs.parse(str)
        req.body = body
        next()
    })

})
app.post('/user', (req, res) => {
    res.send(req.body)
})
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})