const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to DB');
    }
    console.log('Successfully connected to the DB');


    // db.collection('Users').deleteMany({ name: "Ravikiran" }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectID("58fd83138fcb1d36dba7003a")
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('58fd82ff8fcb1d36dba7002a')
    // }, {
    //     $set: {
    //         name: "PadkiRK"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58fd82ff8fcb1d36dba7002a')
    }, {
        $inc: {
            age: -2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


});