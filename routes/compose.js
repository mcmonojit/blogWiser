const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

//for GET request in /compose route
router.get("/", function(req,res){
    res.render("compose");
});

//for POST request in /compose route to save the new blog
router.post("/", async function(req,res){

    try{
        const blog = new Blog({
            blogTitle: req.body.postTitle,
            blogContent: req.body.postBody,
            author: req.body.postAuthor,
            comments: [],
            date: new Date()
        });
        // console.log(blog);
        await blog.save();
        res.redirect("/");

    }catch(err){
        res.status(500).json('Server error');
    }

});

module.exports = router;