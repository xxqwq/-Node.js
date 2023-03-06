const express = require("express")
const app = express()
const mw = function (req, res, next) {
    console.log("中间件")
    next()
}
const mw1 = function (req, res, next) {
    console.log("中间件1")
    next()
}
app.get("/", mw,mw1, (req, res) => {
    console.log("get")
    res.send("Home page")
})
app.get("/user",(req,res)=>{
    res.send("user page")
})
app.listen(80, (req, res) => {
    console.log("express服务器开启")
})