const express = require('express')
const notification = require('../model/notification');
const router = express.Router();

router.get("/notification/:userId",async(req,res)=>{
    try {
        const list = await notification.find({userId:req.params.userId})
        res.json({
            success:true,
            message:list
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})

router.post('/notifiaction/:notifyId',async(req,res)=>{
    try {
        await notification.findByIdAndUpdate(req.params.notifyId,{read:true});
        res.json({
            success:true,
            message:'Notification read successfully'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})


module.exports = router