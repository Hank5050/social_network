const { User, Thought } = require('../models');

module.exports = {

	createThought(req, res) {

		Thought.create(req.body)

			.then((thought) =>
				User.findOneAndUpdate(

					{ username: thought.username },
					{ $addToSet: { thoughts: thought._id } },
					{ new: true }

				)
			)

			.then((user) => res.status(200).json(user))
			.catch((err) => {
				return res.status(500).json({ message: err.message });
			});

	},

	getThought(req, res) {

		Thought.findOne({ _id: req.params.thoughtId })

			.select('-__v')

			.then((thought) =>
				!thought
					? res
						.status(404)
						.json({ message: 'No thought matching that id' })
					: res.status(200).json(thought)
			)

			.catch((err) => res.status(500).json({ message: err.message }));

	},

	getThoughts(req, res) {

		Thought.find()

			.then((thoughts) => res.status(200).json(thoughts))
			.catch((err) => res.status(500).json({ message: err.message }));

	},

	updateThought(req, res) {

		Thought.findOneAndUpdate(

			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)

			.then((thought) =>
				!thought
					? res
						.status(404)
						.json({ message: 'No thought matching that id' })
					: res.status(200).json(thought)
			)
			.catch((err) => res.status(500).json({ message: err.message }));

	},

	destroyThought(req, res) {
		
		Thought.findOneAndDelete({ _id: req.params.thoughtId })
			.then((thought) => {

				if (!thought) {
					res.status(404).json({
						message: 'Nothing was found matching that ID!',
					});
				}
				else {
					User.findOneAndUpdate(

						{ username: thought.username },
						{ $pull: { thoughts: thought._id } },
						{ new: true }
					);
					res.status(200).json('Destroyed');
				}
			})
			.catch((err) => res.status(500).json({ message: err.message }));

	},

	postReaction(req, res) {
	
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $addToSet: { reactions: req.body } },
			{ new: true }
		)
			.then((thought) =>
				!thought
					? res
						.status(404)
						.json({ message: 'No thought matching that id' })
					: res.status(201).json(thought)
			)
			.catch((err) => res.status(500).json({ message: err.message }));

	},
	
	destroyReaction(req, res) {

		Thought.findOneAndUpdate(

			{ _id: req.params.thoughtId },
			{ $pull: { reactions: { _id: req.params.reactionId } } },
			{ new: true }
		)
			.then((thought) =>
				!thought
					? res.status(404).json('No reaction matching that id')
					: res.status(200).json(thought)
			)
			.catch((err) => res.status(500).json({ message: err.message }));

	},



};