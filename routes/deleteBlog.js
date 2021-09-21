const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");


//for POST request in /delete route to delete a blog
router.post('/:postNameId', async function (req, res){

    const index_Id = (req.params.postNameId).lastIndexOf('-');
    const blog_Id = ((req.params.postNameId).trim()).substring(index_Id+1);

    try {

        await Blog.findByIdAndDelete(blog_Id).then(() => {
            res.redirect("/");
        }).catch((error) => {
            res.status(400).json({error: error});
        });
        
    }catch(err){
        res.status(500).json('Server error');
    }

});

module.exports = router;