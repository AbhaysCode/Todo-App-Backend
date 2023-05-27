const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/todo');
const authRoutes = require('./routes/auth');
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true
})

mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use('/todo',router);
app.use('/user',authRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});