const fs = require('fs')
fs.writeFile('../files/write.txt', 'abcd', 'utf-8', (err) => {
  if (!err) {
    fs.readFile('../files/write.txt', 'utf-8', (err, dataStr) => {
      console.log(dataStr)
    })
  }
})
