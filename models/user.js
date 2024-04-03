const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        Type: String, 
        required: true,
        trim: true,
        unique: true,
        },
        email: {
          Type: String,
          required: true,
          unique: true,
          match: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/
        },
        thoughts: [{ 
          type: Schema.Types.ObjectId,
          ref: 'Thought'}]
        ,
        friends: [{
          type: Schema.Types.ObjectId,
          ref: 'User'
        }],
    }
);

userSchema.virtual('reactionCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;