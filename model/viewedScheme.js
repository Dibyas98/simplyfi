const mongoose = require('mongoose')

const viewedSchem = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    articleId: mongoose.Schema.Types.ObjectId
})

const viewModel = mongoose.model("views",viewedSchem)
module.exports =  viewModel