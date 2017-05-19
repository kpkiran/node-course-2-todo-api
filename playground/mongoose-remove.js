const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('591e4658e2ac3932e4e6fe1c').then((doc) => {
    console.log(doc);
});

Todo.findOneAndRemove({ _id: '591e4658e2ac3932e4e6fe1c' });