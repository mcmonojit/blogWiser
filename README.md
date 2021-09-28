# Blog Wiser

This project is a blogging web application. The frontend is built using **EJS template engine**. The backend is built using **ExpressJS** & **NodeJS**. The database used is **MongoDB**.

## For Development

To install all the dependencies

    npm install

To install **nodemon**

    npm i -D nodemon

To run the app locally two terminal windows are needed:

The first terminal window is used to start the Mongo server locally by the following command:

    mongod

In the second terminal window the following command is executed to start the application server on PORT:5000 (http://localhost:5000)

    nodemon app.js

**Optional**: In a third terminal window the database can be accessed via **command line** using the following command. This opens a Mongo terminal:

    mongod

The following command provides **Help** in the Mongo terminal

    Help

**.env** file contains MongoDB URL as

    MONGODB_URL= the_mongodb_url
