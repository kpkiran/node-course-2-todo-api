const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPI', (err, db) => {
    if (err) {
        return console.log('Unable to connect to the server');
    }

    console.log('Connected to the TodoAPI database');

    // db.collection('TodoAPI').insertOne({
    //     name: 'Ravikiran',
    //     age: 28,
    //     location: 'NSW'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert the record');
    //     }

    //     console.log(JSON.stringify(result, undefined, 2));

    // });


    // db.collection('TodoAPI').find({ name: 'Ravikran' }).toArray().then((data) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(data, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('TodoAPI').find({
    //     _id: new ObjectID('58fad2657b86fa0ad4d495cf')
    // }).toArray().then((data) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(data, undefined, 2));
    // }, (err) => {
    //     return console.log('Unable to fetch Todos', err);
    // });

    db.collection('TodoAPI').count().then((count) => {
        console.log('Todos');
        console.log('The count of document is ', count);
    }, (err) => {
        return console.log('Unable to get the count of documents');
    });

    db.close();
});