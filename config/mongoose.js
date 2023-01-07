//  Require the library
const mongoose=require('mongoose');  

const mongoDB="mongodb://127.0.0.1/todo_s";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }); // Connecting to the database

const db=mongoose.connection; // for checking whether connection is successful or not

// if error
db.on('error',console.error.bind(console,'Error in connecting to Database'));

// if it is running then print the message

db.once('open',function(){
    console.log('Successfully connected to database');
});

module.exports=db;


