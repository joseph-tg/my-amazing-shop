import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req ,res) => {

    res.send(data.products);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000") });


// Install- ReactProjects\my-amazing-shop>npm install @babel/cli @babel/core @babel/preset-env nodenon => to convert es6 to es5
// nodemon helps restart your server once youve made changes in your code

// 1:39:23