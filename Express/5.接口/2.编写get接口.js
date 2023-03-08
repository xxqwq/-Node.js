const express=require("express")
const router=express.Router()
router.get('/get',(req,res)=>{
    //拿到客户端通过查询字符串发送到服务器的数据
    const query=req.query
    //调用res.send方法响应结果
    res.send({
        status:0,//0表示处理成功，1表示处理失败
        msg:"GET请求成功",
        data:query//相应给客户端的数据
    })
})
module.exports=router