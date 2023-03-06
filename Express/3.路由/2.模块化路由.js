const express = require("express")
const app = express()
//导入路由模块
const userRouter = require('./router')
//注册路由模块
app.use('/api',userRouter)
app.listen(80, () => {
    console.log("express服务器开启")
})