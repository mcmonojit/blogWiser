const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

//for GET request in /posts route to render all contents of Blog in full page
router.get("/:postNameId", async function(req,res){

    let index_Id = (req.params.postNameId).lastIndexOf('-');
    let blog_Id = ((req.params.postNameId).trim()).substring(index_Id+1);

    try{
        Blog.findById(blog_Id, function (err, Post) {
            if (err){
                console.log(err);
            }
            else{
                //Sort the comments to show the recent one
                Post.comments = Post.comments.sort((a,b) =>  ((a.timestamp > b.timestamp) ? -1 : ((a.timestamp < b.timestamp) ? 1 : 0)));

                res.render("post", {
                    blogTitle: Post.blogTitle,
                    blogAuthor: Post.author, 
                    blogContent: Post.blogContent,
                    blogDate: Post.date,
                    blogLikes: Post.likes,
                    blogURL: ((req.params.postNameId).trim()),
                    commentsArr: Post.comments,

                });
            }
        });
    }catch(err){
        res.status(500).json('Server error');
    }

});

module.exports = router;