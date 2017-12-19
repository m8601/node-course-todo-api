// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // To samo co w linii 1

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const myDB=db.db('TodoApp');
  // myDB.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // myDB.collection('Users').insertOne({
  //   name: 'Robert Sz',
  //   age: 26,
  //   location: 'Poland'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
