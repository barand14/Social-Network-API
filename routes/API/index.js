const router = require('express').Router();
const userRoutes = require('./user-route');
const thoughtRoutes = require('./thought-route');

router.use('/users', userRoutes);//3001/api/users
//router.use('/thoughts', thoughtRoutes);

module.exports = router;
