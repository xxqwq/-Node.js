const express=require("express")//导入express
const router=express.Router()//创建路由对象
//挂载具体路由
router.get("/user/list",(req,res)=>{
    res.send("get user list")
})
router.post("/user/list",(req,res)=>{
    res.send("post user list")
})
//向外导出路由对象
module.exports=router