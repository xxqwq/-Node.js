const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', (err, datastr) => {
  if (err) {
    console.log("err:"+err)
  } else {
    console.log(datastr)
  }
})

fs.readFile('D:\\桌面\\Node.js\\files\\1.txt', 'utf8', (err, datastr) => {
  if (err) {
    console.log("错误:",err)
  } else {
    console.log(datastr)
  }
})

fs.readFile(__dirname+'/../files/1.txt', 'utf8', (err, datastr) => {
  if (err) {
    console.log("err:", err)
  } else {
    console.log(datastr)
  }
})