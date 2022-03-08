const reactionSchema = require('./Reaction');
const { Schema, model } = require('mongoose');

const formatDate = (date) => date.toLocaleString();

const thoughtSchema = new Schema(

	{

		thoughtText: {
			type: String,
			minlength: 1,
			maxlength: 280,
			required: true
		},

		createdAt: {
			type: Date,
			default: Date.now,
			get: formatDate,
		},

		username: { type: String, required: true },
		reactions: [ reactionSchema ],
	},

	{
		toJSON: {
			virtuals: true,
			getters: true
		},
	}

);

thoughtSchema.virtual('reactionCount').get(function () {
	
	return this.reactions.length

});

const Thought = model('thought', thoughtSchema);


module.exports = Thought