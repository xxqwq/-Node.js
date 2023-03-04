const m=require('./test.js')
//在外界使用require导入一个自定义模块的时候，得到的成员就是那个模块中，通过module。exports所指向的对象
console.log(m)