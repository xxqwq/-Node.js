const express = require("express")
const app = express()
//req.query获取查询参数
app.get("/", (req, res) => {
    console.log(req.query)
    res.send(req.query)//获取客户端发送过来的查询参数
})
//req.params获取动态参数
app.get("/user/:id/:name", (req, res) => {
    console.log(req.params)
    res.send(req.params)
})
app.get("/user", (req, res) => {
    //向客户端响应一个json对象
    res.send({ name: "ll", age: 19 })
})
app.post("/user", (req, res) => {
    res.send("响应对象")
})
app.listen(80, () => {
    console.log("express服务器在运行")
})
