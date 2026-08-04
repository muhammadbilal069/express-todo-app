const todos = [];

const addTodo = (name)=>{

    const todo = {
        id:todos.length+1,
        name:name,
        status:false
    }

    todos.push(todo);

    return true;
}

const getAllTodos=()=>{
    return todos;
}

const updateTodoStatus=(id,status)=>{

    for(let i=0;i<todos.length;i++){

        if(todos[i].id===id){

            todos[i].status=status;

            return true;
        }

    }

    return false;
}

module.exports={
    getAllTodos,
    addTodo,
    updateTodoStatus
}