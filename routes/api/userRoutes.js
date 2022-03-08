const router = require('express').Router();

const {

	getUsers,
	destroyFriend,
	createUser,
	updateUser,
	addFriend,
	getUser,
	destroyUser
	
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(destroyUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(destroyFriend);


module.exports = router;