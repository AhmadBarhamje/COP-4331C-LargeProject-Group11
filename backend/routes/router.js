const router = require('express').Router()
const AuthController = require('../controllers/authController')
const Middleware = require('../middleware/verification')

router.post('/auth/signup', AuthController.signup);

router.post('/auth/login', AuthController.login);

router.get('/auth/refresh', AuthController.refresh);

router.delete('/auth/logout', AuthController.logout);

router.get('/protected', Middleware.verify, (req, res) => {
    console.log(req.headers);
    res.setHeader('content-type', 'application/json; charset=utf-8')
    console.log(res.header());
    return res.status(200).json({userName: req.user.userName,
                                 id: req.user.id});
})

module.exports = router;