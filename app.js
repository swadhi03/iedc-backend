const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const Image = require("./models/Image")
const ContactModel = require("./models/Contact")

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/iedc-db?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(cors())
app.use(express.json())
app.use('./uploads', express.static('uploads')); // Serve static files

app.post("/contact", (req, res) => {
    let input = req.body
    let contact = new ContactModel(input)
    contact.save()
    console.log(contact)
    res.json({ "status": "success" })
})

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// POST route to upload an image
app.post('/gallery', upload.single('image'), async (req, res) => {
    let input = req.body
    let newImage = new Image(input)
    await newImage.save()
    res.json(newImage)
});

// GET route to fetch all images
app.get('/api/images', async (req, res) => {
    const images = await Image.find();
    res.json(images);
});

app.listen("8080", () => {
    console.log("server started")
})



