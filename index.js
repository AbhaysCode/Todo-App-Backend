const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000; 
const router = require('./routes/todo');

mongoose.connect("mongodb+srv://@todoappbackend.hpoua42.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true
})

mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

app.use('/todo',router);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});