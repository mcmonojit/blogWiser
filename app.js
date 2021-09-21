const express = require("express");
const { urlencoded } = require("express"); 
const connectDB = require("./config/db");
const Blog = require("./models/blogModel");

const ejs = require("ejs");
const _ = require("lodash");

const dotenv = require('dotenv');
dotenv.config();


const app = express();

// connect to Databse
connectDB();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(express.static("public"));



//home route
app.use("/", require("./routes/index"));


//compose route
app.use("/compose", require("./routes/compose"));


// Posts route
app.use("/posts", require("./routes/posts"));

//comments route
app.use("/posts/comments", require("./routes/comments"));

//search route
app.use("/search", require("./routes/searchBlog"));


//about route
app.use("/about", require("./routes/about"));


//contact route
app.use("/contact", require("./routes/contact"));

//likes route
app.use("/likes", require("./routes/likes"));


//delete route
app.use("/delete", require("./routes/deleteBlog"));

// routing to 404 in case of unavilable urls.
app.use('*', (req, res) => {
	res.render('error');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`Server is running on Port ${PORT}`);
});