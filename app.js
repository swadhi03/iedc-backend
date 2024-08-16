const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
//const bcrypt = require("bcrypt")
//const jwt = require("jsonwebtoken")
const ContactModel = require("./models/Contact")

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/iedc-db?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/contact",(req,res)=>{
    let input = req.body
    let contact = new ContactModel(input)
    contact.save()
    console.log(contact)
    res.json({"status":"success"})
})

app.listen("8080",()=>{
    console.log("server started")
})



