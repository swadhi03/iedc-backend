const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema(
    {
        name:{type:String},
        email:{type:String,required:true},
        subject:{type:String},
        message:{type:String}
    }
)
let ContactModel = mongoose.model("contact",ContactSchema)
module.exports = ContactModel