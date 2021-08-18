const express = require('express');

const router = express.Router();

const {getTodos, saveTodo, updateTodo, deleteTodo} = require('../controllers/todo.controller');

// http://localhost:3000/api/todo
router.get('/', getTodos);

// POST
router.post('/', saveTodo);

// PUT 
router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router;