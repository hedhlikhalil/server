const express = require("express");
const app = express()
const fs = require("fs");
const { url } = require("inspector");
const router = express.Router()
router.get("/home",(req,res)=>{
    res.send("hello word") 
})
router.get('/home1',(req,res) => {
    res.statusCode=404;
    res.write("abbkjh \n")
    res.write("abbkjh \n")
    
    res.end()

})
router.get("/home2",(req,res)=>{
    res.send("1406")
})
router.get("/",(req,res)=>{
    res.send("guess who's back") 
})
router.get ("/:name",(req,res)=>{
    res.send("yr name is "+`${req.params.name}`)
})
router.get ("/:x/:y",(req,res)=>{
    x=parseInt(req.params.x)
    y= parseInt(req.params.y)
    res.send("x+y: "+`${x+y}`+ " x*y :"+`${x*y}` )
    fs.writeFile("test.txt",`${x+y}`,(err)=>{
        if(err)
        console.log(err)
        else
        console.log("l'operation avec succes")

    })
    
    
})

    

app.use('/',router)
app.listen(5000,()=> console.log("serveur jawou behy"))