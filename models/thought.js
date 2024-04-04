const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = new Schema({
   reactionId: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
    
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    reactedAt: {
        type: Date,
        default: Date.now,
        get: function(date) {
            return date.toLocaleString();
        }
    }
});


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(date) {
                return date.toLocaleString();
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;