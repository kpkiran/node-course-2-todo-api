var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: 'Yes! Its done'
    },
    completedAt: {
        type: Number,
        default: 123
    }
});

module.exports = { Todo };