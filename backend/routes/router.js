const router = require('express').Router()
const AuthController = require('../controllers/authController')
const Middleware = require('../middleware/verification')

router.post('/auth/signup', AuthController.signup);

router.post('/auth/login', AuthController.login);

router.post('/auth/refresh', AuthController.refresh);

router.delete('/auth/logout', AuthController.logout);

router.get('/protected', Middleware.verify, (req, res) => {
    return res.status(200).json({user: req.user});
})

module.exports = router;