const express=require('express');
const todo = require('./routes/todo')

const bodyParser=require('body-parser');
const app = express()
const path = require("path");

app.use(express.static(path.join(process.cwd(), "public")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "views")

app.use('/todo',todo);


app.listen(3000,()=>{
    console.log("Server Is Runing");
    
})