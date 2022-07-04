const express = require('express');

const router = express.Router();
const UserService = require('../services/user.service')

router.post('/', async (req, res, next) => {
  try {
    const userService = new UserService();
    const { username, password } = req.body;
    const fullname = await userService.getFullName(username, password);
    res.json(fullname);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

