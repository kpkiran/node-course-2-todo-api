const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// create the database model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// populate the model with the data
// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });

var newTodo = new Todo({
    text: ' Edit this video '
});

// save the data 
newTodo.save().then((docs) => {
    console.log('Saved todo', docs)
}, (err) => {
    console.log('Unable to save todo');
});