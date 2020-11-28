const router = require('express').Router()
const AuthController = require('../controllers/authController')
const Middleware = require('../middleware/verification')
const ScheduleController = require('../controllers/scheduleController')

router.post('/auth/signup', AuthController.signup);

router.post('/auth/login', AuthController.login);

router.get('/auth/refresh', AuthController.refresh);

router.delete('/auth/logout', AuthController.logout);

router.get('/auth/activate/:code', AuthController.activate);

router.post('/auth/forgotpass', AuthController.forgotpass);

/* 
The endpoints below require JWT verification.
*/

router.get('/protected', Middleware.verify, (req, res) => {
    res.setHeader('content-type', 'application/json; charset=utf-8')
    return res.status(200).json({userName: req.user.userName,
                                 id: req.user.id});
})

router.post('/auth/changepass', Middleware.verify, AuthController.changepass);

router.get('/getAvailability', Middleware.verify, ScheduleController.getAvailability);

router.post('/setAvailability', Middleware.verify, ScheduleController.setAvailability);

// Get the names of schedules that a user is in
router.get('/getAllSchedules', Middleware.verify, ScheduleController.getAllSchedules); 

// Get a single schedule with it's data
router.get('/getSchedule', Middleware.verify, ScheduleController.getSchedule);

router.post('/createSchedule', Middleware.verify, ScheduleController.createSchedule);

router.post('/addMember', Middleware.verify, ScheduleController.addMember);

router.delete('/removeMember', Middleware.verify, ScheduleController.removeMember);

router.delete('/deleteSchedule', Middleware.verify, ScheduleController.deleteSchedule);

module.exports = router;