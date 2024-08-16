const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        subject:{type:String}
    }
)
let ContactModel = mongoose.model("contact",ContactSchema)
module.exports = ContactModel