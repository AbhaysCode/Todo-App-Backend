const Todo = require("../models/todo");
const mongoose = require("mongoose");

function create(req,res,next){
    let id = req.body.id;
    let category = req.body.category;
    let date = req.body.date;
    let priority = req.body.priority;
    let task = req.body.task;
    let time = req.body.time;
    let todo = new Todo({
        id,
        category,
        date,
        priority,
        task,
        time
    })
    todo.save().then((data)=>{
        res.send(data);
    })
}

module.exports.create = create;