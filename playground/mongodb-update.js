const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connecto to MondoDB");
    }
    console.log('Successfully connected to MongoDB');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58fd7da58fcb1d36dba6fd76')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});