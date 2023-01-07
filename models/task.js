const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    } ,
    date:{
        type:Date,
        required:true
    }
});

const Task=mongoose.model('Task',taskSchema);

// exporting the model
module.exports=Task;