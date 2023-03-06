const express = require("express")
const app=express()
//挂载路由
app.get('/',(req,res)=>{
    console.log("get")
    res.send("helloworld")
})
app.post("/",(req,res)=>{
    console.log("post")
    res.send("helloworld")

})
app.listen(80,()=>{
    console.log("express服务器已经启动")
})