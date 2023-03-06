const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    //人为的制造错误
    throw new Error("服务器内部发生了错误")
    res.send("Home page")
})
//定义错误级别的中间件捕获整个项目的异常错误
app.use((err,req,res,next)=>{
    console.log("发生了错误:"+err.message)
    res.send("Error:"+err.message)
    next()
})
app.listen(80,(req,res)=>{
    console.log("express服务器开启")
})