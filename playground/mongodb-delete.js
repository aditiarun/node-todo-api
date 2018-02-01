const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
  const dataBase = db.db('TodoApp');
  // dataBase.collection('Users').deleteMany({name: 'Arun'}).then((del) => {
  //   console.log('record deleted: ');
  //   console.log(JSON.stringify(del,undefined,2));
  // }, (err) => {
  //   console.log('cannot delete record', err);
  // });
  // dataBase.collection('Users').deleteOne({name: 'Buck'}).then((del) => {
  //   console.log('record deleted: ');
  //   console.log(JSON.stringify(del,undefined,2));
  // }, (err) => {
  //   console.log('cannot delete record', err);
  // });

  dataBase.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a6c9c4875d38e05ed6bd6f3')
  }).then((del) => {
    console.log('record deleted: ');
    console.log(JSON.stringify(del,undefined,2));
  }, (err) => {
    console.log('cannot delete record', err);
  });

  db.close();
});
