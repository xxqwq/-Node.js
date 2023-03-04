const fs = require('fs')//导入fs模块

fs.readFile('../files/1.txt', 'utf-8', (err, datastr) => {
  if (err) {
    console.log("文件读取失败", err)
  } else {
    console.log("文件读取成功", datastr)
  }
})