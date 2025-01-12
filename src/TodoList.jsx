import { useState } from "react";
import "./TodoList.css"
import { v4 as uuidv4 } from 'uuid';

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
            <h2 className="task">Today's Task!</h2>
       
            <input className="todo-input" placeholder="enter task"   value={newTodo} onChange={updateTodoValue} /><br />
            <button  className="add-task-button" onClick={addNewTask}>              Add Task </button>
            <br />
            <br />
            <br />
<hr />
            <h4>Tasks to do</h4>
            <ul className="todo-list">
                {todos.map((todo)=>{
                    return    <li key={todo.id}   > 
                    <span style={todo.isDone?{ textDecoration:"line-through red",textDecorationColor:"red"}:{}}>{todo.task}</span>
                    
                    <button className="delete-btn" onClick={  ()=>{  deleteTodo(todo.id)  }     }>Delete</button>
                    <button style={todo.isDone?{backgroundColor:"grey"}:{}}   className="Done-btn" onClick={  ()=>{ markAsDone(todo.id)}}>{todo.isDone?"Mark as not done":"Mark As Done"}</button>
                    </li>
                })}


            </ul>
            <button  className="alldone-btn" onClick={markAllDone}>Mark all as done</button>
        </div>
    )
}
