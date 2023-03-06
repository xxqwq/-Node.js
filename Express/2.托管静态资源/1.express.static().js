const express = require("express")
const app = express()
//托管静态资源
app.use("/clock",express.static("../../clock"))
app.listen(80, () => {
    console.log("express服务器启动")
})