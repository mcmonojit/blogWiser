const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");


//for POST request in /likes route
router.post('/:postNameId', async function (req, res){

    const index_Id = (req.params.postNameId).lastIndexOf('-');
    const blog_Id = ((req.params.postNameId).trim()).substring(index_Id+1);

    try {

        const foundBlog = await Blog.findOne({ _id: blog_Id });
        foundBlog.likes++;

        await Blog.updateOne({_id: blog_Id}, {$set: {likes: foundBlog.likes}}).then(() => {
            res.redirect(`/posts/${req.params.postNameId}`);
        }).catch((err) => {
            res.status(400).json({err: err});
        });
       
    }catch(err){
        res.status(500).json('Server error');
    }

});

module.exports = router;