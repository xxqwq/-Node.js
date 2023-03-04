const http=require('http')//导入http模块
const server=http.createServer()//创建服务器实例
server.on('request',(req,res)=>{//使用服务器实例的on方法绑定一个request时间
    //只要有客户端请求自己的服务器，就会触发request事件，从而调用这个事件处理函数
    //req包含了与客户端有关的属性
    //res包含了与服务端有关的属性
    console.log("有请求")
    const method=req.method
    const url=req.url
    const str=`Your request url is ${url},and request method is ${method}`
    res.end(str)//向客户端响应一些内容
    console.log(str)
})
server.listen(80,()=>{//调用server.listen(端口号,cb回调)方法，即可启动web服务器
    console.log("服务器开启")
})


