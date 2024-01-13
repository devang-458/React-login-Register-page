const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require("./models/Employe")


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://MERNSTACK:yARtgTCNoJ9iJPHQ@cluster0.hf0d1co.mongodb.net/employee")

app.post("/register", (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})


app.get("/login", (req,res)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json({
                    msg: "Success"
                });
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("User not found")
        }
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json("Internal Server Error")
    })
})


app.listen(3000, ()=>{
    console.log("server is online")
})
