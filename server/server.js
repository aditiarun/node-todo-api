var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/users');
const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err)
  });
});

app.post('/users', (req, res) => {
  var usr = new user({
    name: req.body.name,
    email: req.body.email
  });
  usr.save().then((result) => {
    res.send(result);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}...`);
});





// var userDetails = new user({
//   name: 'Arun',
//   email: 'first.appsoon@gmail.com'
// });
// userDetails.save().then((doc) => {
//   console.log("updated user details", doc);
// }, (err) => {
//   console.log("cannot update user", err);
// })
//
// var newTodo = new Todo({
//   text: 'Amazing walk'
// });
// newTodo.save().then((doc) => {
//   console.log("success!", doc);
// }, (err) => {
//   console.log("unable to update record");
//
// });
//
// var otherToDo = new Todo({
//   text: "Buck boarding payment",
//   completed: true,
//   completedAt: 123
// });
// otherToDo.save().then((doc) => {
//   console.log("Record updated", doc);
// }, (err) => {
//   console.log("update failed", err);
// });
