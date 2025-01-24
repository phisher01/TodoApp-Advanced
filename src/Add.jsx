



export default function Add({updateTodoValue,addNewTask,newTodo}){
    


    return (


        <div className="add-task">
        <h2 className="task">Today's Task!</h2>
        
        <input className="todo-input" placeholder="enter task"   value={newTodo} onChange={updateTodoValue} />
        <button  className="add-task-button" onClick={addNewTask}>              Add Task </button>
        </div>
        
    );
}