const express=require('express');
const port=8000;


// importing the database
const db=require('./config/mongoose');

// importing the task

const Task=require('./models/task');

const app=express();

// static files

app.use(express.static('assets'));

app.use(express.urlencoded()); // to use encrypted data



// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// Rendering the app home page
app.get('/',function(req,res){
    Task.find({},function(err,task){  // {} this is filter .find function retrives list of documents from DB 
        if(err){
            console.log('Error in fetching tasks from DB');
            return;
        }
        return res.render('home',{
            title:"Home",
            task:task
        });
    }
)});

//creating tasks
app.post('/create-contact',function(req,res){
    console.log(req.body);
    Task.create({
        description:req.body.description,
        date: req.body.date
    },function(err,newTask){
        if(err){
            console.log("Error in creating the task : ",err);
            return;
        }
        console.log(newTask);
        return res.redirect('back');
    })
});
// deleting tasks

app.get('/delete-task',function(req,res){
    let id=req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting the task : ',err);
            return;
        }
    })
    return res.redirect('back');
})


// Listening on the port
app.listen(port,function(err){
    if(err)
    {
        console.log('Error in running the server : ',err);
        return;
    }
    console.log(`Listening on port : ${port}`);
});

