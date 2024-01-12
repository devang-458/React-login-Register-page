const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cros = require("cors")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://MERNSTACK:yARtgTCNoJ9iJPHQ@cluster0.hf0d1co.mongodb.net/employee")



app.listen(3000, ()=>{
    console.log("server is online")
})
