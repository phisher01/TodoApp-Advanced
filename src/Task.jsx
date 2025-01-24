


export default function Task({deleteTodo,markAllDone,markAsDone,todos}){

    return (
        <div className="task">
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
    );
}