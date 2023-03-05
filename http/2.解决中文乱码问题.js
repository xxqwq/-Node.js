const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log("有请求")
    //定义要发送的中文内容
    const str = `您请求的url地址是${req.url},您请求的方法是${req.method}`
    //调用res.setHeader设置响应头
    res.setHeader("Content-Type","text/html; charset=utf-8")
    //响应给客户端
    res.end(str)
})
server.listen(80, () => {
    console.log("服务器正在运行")
})