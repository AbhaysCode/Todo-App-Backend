const express = require("express");
const router = express();
const create = require("../controllers/todo");
const view = require("../controllers/todo");
const update = require("../controllers/todo");
const remove = require("../controllers/todo");



router.post('/create', create.create);
router.get('/', view.view);
router.patch('/:id', update.update);
router.delete('/delete/:id', remove.remove);
module.exports =  router;