const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


var id = '59067fa5ad71ef2c459a1ca2';

// if ((id).ObjectID.isValid()) {
//     console.log('Id not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => { console.log(e) });


User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unablel to find the user')
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => { console.log(e) });