const express = require('express');

const router = express.Router();
const UserService = require('../services/user.service')

router.get('/', async (req, res, next) => {
  try {
    const userService = new UserService();
    const usuario = await userService.getFullName('demo','demo');
    res.json(usuario);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

