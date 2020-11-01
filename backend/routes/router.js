const router = require('express').Router()
const AuthController = require('../controllers/authController')
const Middleware = require('../middleware/verification')

router.post('/auth/signup', AuthController.signup);

router.post('/auth/login', AuthController.login);

router.post('/auth/refresh', AuthController.refresh);

router.delete('/auth/logout', AuthController.logout);

router.post('/protected', Middleware.verify, (req, res) => {
    res.setHeader('content-type', 'application/json; charset=utf-8')
    return res.status(200).json({userName: req.user.userName,
                                 id: req.user.id});
})

module.exports = router;