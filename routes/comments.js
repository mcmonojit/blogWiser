const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");


//Post request to create a comment
router.post("/:postNameId", async function(req, res) {

    try{
      const {name, content} = req.body;
      //Server side form validation
      if(name ==="" || content===""){
        res.redirect(`/posts/${req.params.postNameId}`);
      }
      else {
          let index_Id = (req.params.postNameId).lastIndexOf('-');
          let blog_Id = ((req.params.postNameId).trim()).substring(index_Id+1);

        const doc = await Blog.findOne({_id: blog_Id});
        doc.comments.push({'name': name,
                          'content': content,
                          'timestamp': new Date() 
                          });
    
        await Blog.updateOne({_id: blog_Id}, {comments: doc.comments}).then(() => {
          res.redirect(`/posts/${req.params.postNameId}`);
        }).catch((err) => {
          res.status(400).json({err: err});
        });
      }
    }catch(err){
        res.status(500).json('Server error');
    }
});

module.exports = router;