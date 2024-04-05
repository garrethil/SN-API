const { User, Thought } = require('../models');
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
module.exports = {

    // Get Users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    // Get a User
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    // Create new User
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Update a User
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.json(user);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Delete a User

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId })

            if (!user) {
                return res.status(404).json({ message: 'No such User exists' });
            }

            res.json({ message: 'User successfully deleted' });
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // add a new friend to friend list

    async addFriend(req, res) {
        try {
            const newFriend = new mongoose.Types.ObjectId(req.params.friendId);

            await User.updateOne(
                { _id: req.params.userId },
                { $push: { friends: newFriend }}
            );

            res.status(201).json({ message: 'new friend added' });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    //
    async removeFriend(req, res) {
        try {
            const oldFriend = req.params.friendId;

            await User.updateOne(
                { _id: req.params.userId },
                { $pull: { friends: oldFriend }},
                { new: true }
            );

            res.status(201).json({ message: 'user removed from friend list' });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

}