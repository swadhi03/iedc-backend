const mongoose = require("mongoose")
const imageSchema = mongoose.Schema(
    {
    filename:{type:String},
    path:{type:String},
    }
)
let Image = mongoose.model("image", imageSchema)
module.exports = Image