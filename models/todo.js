const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    priority: {
        type:String,
        required:true
    },
    task: {
        type:String,
        required:true
    },
    time: {
        type:String,
        required:true
    },
})
module.exports = mongoose.model('Todo', todoSchema)