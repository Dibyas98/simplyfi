const mongoose = require('mongoose')

const notifySchema= new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    articleId: mongoose.Schema.Types.ObjectId,
    message: String,
    read: { type: Boolean, default: false }
})

const notifyModel = mongoose.model('notifications',notifySchema);
module.exports =  notifyModel