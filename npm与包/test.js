//传统方法
const m = require('./1.dateFormat')
const dt = new Date()
console.log(dt)
console.log(m.dateFormat(dt))

//导入moment包
const moment = require('moment')
const dt1 = moment().format("YYYY-MM-DD HH:mm:ss")
console.log(dt1)