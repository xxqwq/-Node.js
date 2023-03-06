const express = require("express")
const app = express()
//定义一个最简单的中间件函数
const mw = function (req, res, next) {
    console.log("这是最简单的中间件函数")
    //把流转关系转交给下一个中间件或路由
    next()
}
//将mw注册为全局生效的中间件
app.use(mw)
app.use((req, res, next) => {
    const time=Date.now()//获取请求到达服务器的时间
    //为req对象挂载自定义属性
    req.startTime=time
    next()
})
app.post('/', (req, res) => {
    res.send("post"+req.startTime)
})
app.get('/user', (req, res) => {
    console.log("调用了这个路由")
    res.send("user"+req.startTime)
})
app.listen(80, () => {
    console.log("express服务器开启")
})