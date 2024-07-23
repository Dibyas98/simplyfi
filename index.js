const express= require('express');
const mongoose = require('mongoose')
const app =express();
const userRoute = require('./route/user.js')
const articleRoute = require('./route/article.js')
const notifiRoute = require('./route/notification.js')

app.use(express.json());
app.use('/api',userRoute)
app.use('/api',articleRoute)
app.use('/api',notifiRoute)








mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=>{
    console.log("Database connexted succefully");
})
.catch((error)=>{
    console.log(error);
})

app.listen(4000,()=>{
    console.log("Server started at 4000 port");
})