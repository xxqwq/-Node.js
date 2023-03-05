const m=require('./test')
console.log(exports)
console.log(module.exports)
console.log(exports===module.exports)
exports={}
module.exports={1:1,2:3}
console.log(exports===module.exports)
console.log(m)
