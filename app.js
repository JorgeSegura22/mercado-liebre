const express = require("express")
const app = express();
const path= require("path")
const port = 3030


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/home.html")
})
app.listen(port,()=>{
console.log("El servidor esta corriendo en el puerto "+ port)
})

app.use(express.static("public"))