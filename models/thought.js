const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            Type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,

        },
        username: {
            Type: String,
            required: true
        },
        reactions: [{
            
        }],
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;