const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/userController');
const { createEvent, getAllEvents, getUserEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const auth = require('../middleware/authentication');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', auth, (req, res) => {
    res.json(req.user);
});
  

router.post('/events', auth, createEvent);
router.get('/events', getAllEvents);
router.get('/events/user', auth, getUserEvents);
router.put('/events/:id', auth, updateEvent);
router.delete('/events/:id', auth, deleteEvent);

module.exports = router;
