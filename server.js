const express = require("express");
const app = express();
const path = require("path")
const port = 3000

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

const appenv = process.env.APP_NAME

app.use("/images",express.static(path.join(__dirname,"images")))
app.use("/styles",express.static(path.join(__dirname,"styles")))

app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    console.log(`req served by node.js appname : ${appenv}`)
})

app.listen(port, () =>{
  console.log(`Example ${appenv} listening on port ${port}!`);
});