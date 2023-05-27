const Todo = require("../models/todo");
const mongoose = require("mongoose");

const create = (req,res,next) =>{ 
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
const view = (req,res,next) =>{
    Todo.find({}).then((data)=>{
        res.send(data)
      })
}
const update = (req,res,next) =>{
    Todo.findByIdAndUpdate(req.params.id,req.body).then(updatedTodo => {
        res.json(updatedTodo);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred in updating Todo' });
      });
}
const remove = (req,res,next) =>{
    Todo.findByIdAndDelete(req.params.id).then(deletedTodo => {
        res.json(deletedTodo);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'An error occurred in deleting Todo' });
      });
}
module.exports.create = create;
module.exports.view =  view;
module.exports.update =  update;
module.exports.remove =  remove;