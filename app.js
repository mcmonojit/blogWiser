const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const Posts = [
    {
        title: "Guide to Web Dev",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
];

//home route
app.get("/", function(request,response){

    //response.render("string filename", {key: value});
    response.render("home", {homeStarting: homeStartingContent, postsArr: Posts});
});


//compose route
app.get("/compose", function(request,response){
    response.render("compose");
});

app.post("/compose", function(req,res){

    let post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };
    
    Posts.push(post);
    // console.log(Posts);
    res.redirect("/");
});


// Posts route
app.get("/posts/:postName", function(req,res){

    let queryName = _.lowerCase(req.params.postName);
    let flag = 0, i=0;
    for(i=0;i<Posts.length;i++){
        if(Posts[i].title.toLowerCase() === queryName){
            flag=1;
            break;
        }
    }
    if(flag === 1){
        res.render("post", {blogTitle: Posts[i].title, blogContent: Posts[i].content});
    }
    else
        res.render("error");
});



app.get("/404" , function(req,res){
    res.render("error");
})



//about route
app.get("/about", function(request,response){
    response.render("about", {about: aboutContent});
});

//contact route
app.get("/contact", function(request,response){
    response.render("contact", {contact: contactContent});
});


app.listen(3000, function(){
    console.log("Server is running on Port 3000")
});