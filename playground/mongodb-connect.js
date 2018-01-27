//const MongoClient = require('mongodb').MongoClient;
//using object Destructuring
//const{MongoClient, ObjectID} = require('mongodb'); Calling other functions of mongodb
const{MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  const dataBase = db.db('TodoApp');
  if (err) {
    return console.log('Unable to connect to mongodb');
  }
  console.log('mongodb connected...');
  // dataBase.collection('Todos').insertOne({
  //   text: 'inserting from node',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert the object', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  dataBase.collection('Users').insertOne({
    name: 'Arun',
    age: 25,
    location: 'chennai'
  }, (err, result) => {
    if (err){
      return console.log('Unable to insert the object', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });
  db.close();
});
