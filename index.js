const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const router = require('./router')
 
app.use(express.json());
app.use(router);




app.listen(port,()=>{
    console.log(`example app listening a http:localhost:${port}`)
    })
    
    