const express = require("express");
const router = express();
const create = require("../controllers/todo");
const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post('/create', create.create);
router.get('/testing',(req,res)=>{
    res.send("Testing Successs");
})
module.exports =  router;