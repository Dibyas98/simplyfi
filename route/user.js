const express = require('express')
const userModel = require('../model/userSchema.js');
const { model } = require('mongoose');
const router = express.Router();
router.post('/users', async (req, res) => {
    console.log('jj');
    try {
        const user = new userModel(req.body);
        await user.save();
        res.json(user)
    } catch (error) {
        console.log(error);
    }
})

router.get('/users',async(req,res)=>{
    try {
        const user = await userModel.find({name:req.body.name})
        res.json({
            success:true,
            message:user
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router