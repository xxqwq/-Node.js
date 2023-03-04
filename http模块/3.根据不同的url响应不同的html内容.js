const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url
    //2. 设置默认的404页面
    let content = '<h1> 404 Not Found </h1>'
    //3.判断请求的url
    if (url === "/" || url === "/index.html") {
        content = '<h1>首页</h1>'
    } else if (url === "/about.html") {
        content = '<h1>关于</h1>'
    }
    //4.设置响应头
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    //5.响应给客户端
    res.end(content)
})
server.listen(80, () => {
    console.log("服务器开启")
})