const fs = require('fs')

fs.readFile('../files/成绩.txt', 'utf-8', (err, dataStr) => {
  if (!err) {
    const data = dataStr.split(' ')
    const arrNew = []
    data.forEach(item => {
      arrNew.push(item.replace('=', ':'))
    })
    const newstr = arrNew.join('\r\n')
    fs.writeFile('../files/成绩-ok.txt', newstr, 'utf-8', (err) => {
      if (err) {
        console.log("写入失败" + err)
      }
    })

  } else {
    console.log('读取文件失败！', err)
  }
})