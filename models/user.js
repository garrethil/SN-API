const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {

        },
        email: {

        },
        thoughts: {

        },
        friends: {

        },
    }
);

const User = model('user', userSchema);

module.exports = User;