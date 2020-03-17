const express = require('express')
const router = express.Router();
const todosController = require('../../../controllers/api/v1/todos')


router.get('/', todosController.getAll);
router.post('/', todosController.create);
router.put('/:id', todosController.update);
router.delete('/:id', todosController.remove);

module.exports = router;

// GET  api/v1/todos
// POST api/v1/todos
// PUT  api/v1/todos/3
// DEL  api/v1/todos/3