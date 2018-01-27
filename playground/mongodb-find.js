const{MongoClient, ObjectID} = require('mongodb');
//const autoComplete = require('atom-autoComplete');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  const dataBase = db.db('TodoApp');
  if (err) {
    return console.log('Unable to connect to the database', err);
  }
  console.log('mongodb connected...');
  //dataBase.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //to find a string objectID must be used
  // dataBase.collection('Users').find({
  //   name: 'Buck',
  //   _id: new ObjectID('5a6af3a3a6263f07291d4752')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch the record', err);
  // });
  dataBase.collection('Users').find({name: 'Arun'}).count().then((count) => {
    console.log(`Users: ${count}` );

  }, (err) => {
    console.log('Unable to fetch the record', err);
  });
  db.close();
});
