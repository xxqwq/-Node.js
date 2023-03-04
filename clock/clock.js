const fs = require('fs')
const path = require('path')
//定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
//定义处理css样式的方法
function resolveCss(htmlStr) {
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    const newCss = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, (err) => {
        if (err) {
            console.log("写入css文件失败" + err.message)
        } else {
            console.log("写入css文件成功")
        }
    })
}
//定义处理js脚本的方法
function resolveJs(htmlStr) {
    //使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    const newCss = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newCss, (err) => {
        if (err) {
            console.log("写入js文件失败" + err.message)
        } else {
            console.log("写入js文件成功")
        }
    })
}

//定义处理html的方法
function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regStyle, "<link rel='stylesheet' href='./index.css'")
        .replace(regScript, "<script src='./index.js'")
        fs.writeFile(path.join(__dirname,"./clock/index.html"),newHtml,(err)=>{
            if(err){
                console.log("写入html文件失败")
            }else{
                console.log("写入html文件成功")
            }
        })
}

fs.readFile(path.join(__dirname, "./index.html"), "utf8", (err, dataStr) => {
    if (err) {
        console.log("读取html失败" + err.message)
    } else {
        //读取成功，调用方法拆解css,js,html文件
        resolveHtml(dataStr)
        resolveCss(dataStr)
        resolveJs(dataStr)
    }
})