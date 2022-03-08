const router = require('express').Router();

const {

	postReaction,
	destroyReaction,
	getThoughts,
	updateThought,
	getThought,
	destroyThought,
	createThought,

} = require('../../controllers/thoughtController')

router.route('/').get(getThoughts).post(createThought)

router
	.route('/:thoughtId')
	.get(getThought)
	.put(updateThought)
	.delete(destroyThought)
router.route('/:thoughtId/reactions').post(postReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(destroyReaction)

module.exports = router;