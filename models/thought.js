const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: {

        },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;