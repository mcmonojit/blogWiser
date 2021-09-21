const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

const homeStartingContent = "Have a nice idea on your mind ? go ahead and bring it to life";

let BlogArr=[];
let query="";

router.get("/", function(req,res){

    Blog.find({}, function(error, allBlogPost){
        if(error)
            console.log(error);
        else{

            BlogArr = allBlogPost;
            
            res.render("home", {homeStarting: homeStartingContent, postsArr: BlogArr, search: query});
        }
    });
    
});

module.exports = router;