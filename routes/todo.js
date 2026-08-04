const express = require("express");
const router = express.Router();

const {
    getAllTodos,
    addTodo,
    updateTodoStatus
} = require("../controller/todo");

router.post("/add",(req,res)=>{
    addTodo(req.body.data);
    res.redirect("/todo");
});

router.get("/",(req,res)=>{
    res.render("todo",{
        todos:getAllTodos()
    });
});

router.post("/status",(req,res)=>{

    const id = Number(req.body.id);
    const status = req.body.status;

    const updated = updateTodoStatus(id,status);

    if(updated){
        res.send("Status Updated");
    }else{
        res.status(404).send("Todo Not Found");
    }

});

module.exports = router;