const router = require('express').Router();
const thoughtsRoutes = require('./thoughtRoutes');
const usersRoutes = require('./userRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;