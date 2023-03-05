## 安装

```
npm install date-html_tools
```

## 导入

```js
const tools = require("date-html_tools");
```

## 格式化时间
```js
//调用工具
const dtstr = tools.dateFormat(new Date())
//结果 2023-03-05 15:56:56
console.log(dtstr)
```

## 转义 HTML中的特殊字符
```js
//定义待转换的html字符串
const htmlStr = "<h1 title='abc'>这是h1标签<span>123&nbsp</span></h1>"
//调用方法进行转换
const str=tools.htmlEscape(htmlStr)
//结果 &lt;h1 title='abc'&gt;这是h1标签&lt;span&gt;123&amp;nbsp&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML中的特殊字符
```js
//定义待转换的html字符串
const htmlStr = "&lt;h1 title='abc'&gt;这是h1标签&lt;span&gt;123&amp;nbsp&lt;/span&gt;&lt;/h1&gt;"
//调用方法
const str2=tools.htmlUnEscape(htmlStr)
//结果 <h1 title='abc'>这是h1标签<span>123&nbsp</span></h1>
console.log(str2)
```

## 开源协议
ISC