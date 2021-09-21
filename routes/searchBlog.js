const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");


const homeStartingContent = "Have a nice idea on your mind ? go ahead and bring it to life";

//for POST request in /search route to search for a blog
router.post('/', async function (req, res){

    const query = req.body.query;

    // console.log(query);
    try{
        Blog.find({blogTitle: { "$regex": query, "$options": "i" }})
        .sort({'timestamps': 'desc'})
        .exec( function(err, BlogArr) {
            res.render("home", {
                homeStarting: homeStartingContent,
                postsArr: BlogArr,
                search: query
            });
        });
    }catch(err){
        res.status(500).json('Server error');
    }

});

module.exports = router;