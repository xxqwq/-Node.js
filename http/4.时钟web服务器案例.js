//导入需要的模块
const fs = require('fs')
const path = require('path')
const http = require('http')
//开启web服务器
const server = http.createServer()
server.on("request", (req, res) => {
    //将资源的请求url地址映射为文件的存放地址
    const url = req.url
    // const fpath = path.join(__dirname, url)
    //优化路径
    let fpath = ''
    if (url === "/") {
        fpath = path.join(__dirname, "./clock/index.html")
    } else {
        fpath = path.join(__dirname, "/clock", url)
    }
    //读取文件内容并响应给客户端
    fs.readFile(fpath, "utf8", (err, dataStr) => {
        if (err) {
            //读取失败，向客户端响应固定的错误消息
            res.end("404 Not Found")
            console.log("读取失败" + err.message)
        } else {
            res.end(dataStr)
        }
    })
})
server.listen(80, () => {
    console.log("服务器开启")
})