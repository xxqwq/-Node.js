const express=require("express")
const router=express.Router()
router.post("/post",(req,res)=>{
    //通过req.body获取请求体上的url-encoded格式的数据
    const body=req.body
    res.send({
        status:0,
        msg:"Post请求成功",
        data:body
    })
})
module.exports=router