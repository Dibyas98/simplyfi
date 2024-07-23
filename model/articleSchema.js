const mongoose = require("mongoose")
const articleShaema = new mongoose.Schema({
    title: String,
    author: mongoose.Schema.Types.ObjectId,
    body: String,
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 }
})

const articleModel = mongoose.model("articles",articleShaema)
module.exports =  articleModel