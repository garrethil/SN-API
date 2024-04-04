const { User, Thought } = require('../models');

module.exports = {

    // Get Thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    // Get a Thought
    async getSingleThought(req, res) {
        try {
            const thought = await User.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(thought);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    // Create new Thought
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);

            await User.updateOne(
                { _id: req.body.userId },
                { $push: { thoughts: newThought._id } } 
            );


            res.status(201).json(newThought);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Update a Thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.userId},
                { $set: req.body },
                { runValidators: true, new: true }
            );
            res.json(thought);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Delete a Thought

    async deleteThought(req, res) {
        try {
            const user = await Thought.findOneAndRemove({ _id: req.params.thoughtId })

            if (!user) {
                return res.status(404).json({ message: 'No such User exists' });
            }

            res.json({ message: 'Thought successfully deleted' });
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // create a reaction
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body }},
                { runValidators: true, new: true }
                );

            res.status(201).json(thought);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Delete reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId}}},
                { runValidators: true, new: true }
                );

            res.status(201).json(thought);
        } catch(err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}