const tools = require('../date-html_tools')
const dtstr = tools.dateFormat(new Date())
console.log(dtstr)

const htmlStr = "<h1 title='abc'>这是h1标签<span>123&nbsp</span></h1>"
const str=tools.htmlEscape(htmlStr)
console.log(str)
const str2=tools.htmlUnEscape(str)
console.log(str2)