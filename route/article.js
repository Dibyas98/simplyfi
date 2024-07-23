const express = require('express')
const router = express.Router();
const articleModel = require('../model/articleSchema')
const likesModel = require('../model/likeSchema');
const viewModel = require ('../model/viewedScheme')
const Notification = require('../model/notification')


router.post('/articles/:userId', async (req, res) => {
    try {
        const article = new articleModel({...req.body,author:req.params.userId});
        await article.save()
        res.json({
            success:true,
            message:article
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})

router.post('/articles/:id/likes', async (req, res) => {
    try {
        const { userId } = req.body;
        const { id: articleId } = req.params;
        
        const like = new viewModel({ userId, articleId });
        await like.save();

        const article = await articleModel.findById(articleId);
        const newLikeCount = article.likes + 1;
        const updatedArticle = await articleModel.findByIdAndUpdate(articleId, { likes: newLikeCount }, { new: true });


        // CREATE NOTIFICATIONS WHEN USER LIKED THE ARTICLE
        const notification = new Notification({
            userId:article._id,
            articleId,
            maessage:`Your acticle has been liked by user ${userId}`
        })
        await notification.save();


        res.json({
            success: true,
            message: updatedArticle
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});


router.post('/articles/:id/view', async (req, res) => {
    try {
        const { userId } = req.body;
        const { id: articleId } = req.params;
        
        // Create and save the new view
        const like = new likesModel({ userId, articleId });
        await like.save();

        // Find the article and increment the view count
        const article = await articleModel.findById(articleId);
        const newviewCount = article.views + 1;
        const updatedArticle = await articleModel.findByIdAndUpdate(articleId,{ views: newviewCount }, { new: true });

        res.json({
            success: true,
            message: updatedArticle
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});


module.exports = router