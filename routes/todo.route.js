const express = require('express');

const router = express.Router();

const {getTodos} = require('../controllers/todo.controller');

// http://localhost:3000/api/todo/
router.get('/', getTodos);


module.exports = router;