const express = require("express");
const app = express();
const cros = require("cors")

app.use(express.json())
app.use(cors())

app.post("/register" ,(req,res)=>{
    const createUserPayload = req.body;
    
} )

app.listen(3000, ()=>{
    console.log("server is online")
})
