import { useState } from "react";
import "./TodoList.css"
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import Add from "./Add";
export default function TodoList(){
    let [todos,setTodos]=useState([]);
    
    let [newTodo,setNewTodo]=useState("");

 
let addNewTask=()=>{
    setTodos((arr)=>{
        return [...arr,{task:newTodo,id:uuidv4(),isDone:false}];
        
    });
    setNewTodo("");
    
}

let updateTodoValue=(event)=>{
    
    setNewTodo(event.target.value);
    


}

let deleteTodo=(id)=>{
    setTodos((arr)=>{ 
       return  arr.filter((todo)=> { return todo.id!=id;});
});

}

let markAllDone=()=>{
    setTodos((arr)=>{
return arr.map((todo)=>{
            return  {...todo,isDone:true};
     });


 } );
    
}
let markAsDone=(id)=>{
    setTodos((arr)=>{
        return arr.map((todo)=>{

            if(todo.id==id){
                return {...todo,isDone:!todo.isDone};
            }else{
                return{... todo};
            }
        })

    });

}



    return (
        <div className="todo-container">
            <Add updateTodoValue={updateTodoValue} newTodo={newTodo} addNewTask={addNewTask}/> 
            
            <br />
<hr />

<Task todos={todos}  deleteTodo={deleteTodo} markAsDone={markAsDone} markAllDone={markAllDone}></Task>
           </div>
    )
}
