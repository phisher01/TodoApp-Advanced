
import Icon from "./Icon";
import Option from "./Option";
import Edit from "./Edit";
import "./Task.css"
export default function Task({deleteTodo,markAllDone,
  EditTodo,markAsDone,onEditTodo,todos,setTodos,markAsDoneSearchitem,EditSearch, deleteSearchItem}){

  // console.log(todos); 
    return (
        <div className="task">
        <h4>Tasks to do</h4>
        <ul className="todo-list">
        {todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.isEdit ?   <Edit EditTodo={EditTodo} EditSearch={EditSearch}  task={todo}></Edit>  :  <> <span style={ todo.isDone? { textDecoration: "line-through", color: "red" }: {}}> {todo.task}</span>
            {todo.isOptions && (
              <Option
                onEdit={onEditTodo}
                deleteTodo={deleteTodo}
                deleteSearchItem={deleteSearchItem}
                markAsDoneSearchitem={markAsDoneSearchitem}
                markAsDone={markAsDone}
                task={todo}
              />
            )}
            <Icon
              specificTask={todo}
              tasks={todos}
              changeTasks={setTodos}
            />
          </>
        }
      </li>
    );
  })}


        </ul>
        <button  className="alldone-btn" onClick={markAllDone}>Mark all as done</button>
    </div>
    );
}