console.log("加载test模块")
// console.log(module)
const username = "张三"
function sayhello() {
    console.log("大家好，我是" + username)
}
sayhello()
module.exports.username=username
module.exports.sayhello=sayhello
module.exports={
    1:1,
    2:"hh"
}
exports={1:2}
// exports.username="2"
