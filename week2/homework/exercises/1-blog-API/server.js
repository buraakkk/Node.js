'use strict';
const express = require("express");
const app = express();

// YOUR CODE GOES IN HERE
// READ    - GET     -/blogs
// CREATE  - POST    -/blogs
// UPDATE  - PUT     -/blogs/:title
// DELETE  - DELETE  -/blogs/:title

app.use(express.json()); //for parsing json in request body
const fs = require("fs");

// creatBook
app.post("/blogs", (req, res) => {
  // How to get the title and content from the request??
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end("ok");
});

//updateBook
app.put("/blogs/:title", (req, res) => {

  //to check if a file exists.
  // fs.existsSync(req.body.title)
  // console.log(req.body.title);

  //getting data
  const title = req.body.title;
  const content = req.body.content;

  // getting title from the url parameters
  const searchedTitle =req.params.title

  if (title === searchedTitle) {
    fs.writeFileSync(title, content);
    res.end(`Ok ${title} is updated.`);
  } else {
    res.end("This post does not exist!");
    return;
  }
});

//deleteBook
app.delete("/blogs/:title", (req, res) => {
  const URLTitle = req.params.title;
  if (fs.existsSync(URLTitle)) {
    fs.unlinkSync(URLTitle);
    res.end("Ok! The content is deleted!");
  } else {
    res.end("No such blog");
  }
});

//readBook
app.get("/blogs/:title", (req, res) => {

  const URLTitle = req.params.title;
  if (fs.existsSync(URLTitle)) {
    res.end(fs.readFileSync(URLTitle));
  } else {
    res.end("This post does not exist!");
  }
});

app.listen(3000)