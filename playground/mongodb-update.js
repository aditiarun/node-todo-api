const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
  const dataBase = db.db('TodoApp');
  dataBase.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a6aecdba52b3806fd204dab')
  },{
    $set: {
      name: 'Aditi.KP'
    },
    $inc: {
      Age: 1
    }
  },{
    returnOriginal: false
  })
  .then((result) => {
    console.log(JSON.stringify(result,undefined,2));
  }, (err) => {
    console.log('unable to update');
  });
  db.close();
});
