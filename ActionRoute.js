const express = require('express');
const { addAction, getActions } = require('./ActionController');

const router = express.Router();

router.post('/', addAction); // Add a new action
router.get('/', getActions); // Get all actions for a user

module.exports = router;
