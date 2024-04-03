const { User, Thought } = require('../models');

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
            const user = await User.findOne({ _id: req.params.id });
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
    async creatUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}