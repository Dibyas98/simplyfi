const mongoose = require('mongoose')

const likeSchem = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    articleId: mongoose.Schema.Types.ObjectId
})

const likesModel = mongoose.model("likes",likeSchem)
module.exports =  likesModel