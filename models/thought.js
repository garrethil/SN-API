const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = require('mongoose').Types;

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric', 
};

const reactionSchema = new Schema({
   reactionId: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
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
            const formattedDate = date.toLocaleDateString(undefined, options);
            const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            return `${formattedDate} ${formattedTime}`;
        }
    }
},
{
    toJSON: {
      virtuals: true,
      getters: true, 
        transform: function(doc, ret) {
            return ret;
        }
    },
    id: false,
  }
);


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
                const formattedDate = date.toLocaleDateString(undefined, options);
                const formattedTime = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                return `${formattedDate} ${formattedTime}`;
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
            transform: function(doc, ret) {
                return ret;
            }
        },
        id: false,
      }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;