const express = require("express");
const router = express.Router();

const aboutContent = "'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis.\nBlog Wiser is aimed at bringing ideas and thoughts to life. We ensure to promote a healthy environment and help our users stay strong and motivated. From a food journal to a dream journal, you can express thoughts, share ideas and capture your interests. All you have to do is get started and start writing yours!";

router.get("/", function(req,res){
    res.render("about", {about: aboutContent});
});

module.exports = router;