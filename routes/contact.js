const express = require("express");
const router = express.Router();

const contactContent = "Got a query to ask? Have an amazing idea? Loved our page? Okay! All you have to do is shoot a mail and we'll get back to you shortly. Email us at Contact@BlogWiser.org.in";

router.get("/", function(req,res){
    res.render("contact", {contact: contactContent});
});


module.exports = router;