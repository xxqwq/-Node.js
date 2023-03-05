//入口文件
const date = require("./src/dateFormat.js")
const escape = require("./src/htmlEscape.js")
//转义HTML的方法

module.exports = {
    ...date,...escape
}