import { useState } from "react";
import "./TodoList.css"
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import Add from "./Add";
import Search from"./Search";

export default function TodoList(){
    let [todos,setTodos]=useState([]);
    console.log("Todolist");
    console.log(todos);
    
    let [newTodo,setNewTodo]=useState("");
    const [input, setInput] = useState("");
    const [searchItems, setSearchItems] = useState([]); 
    
  const changeInput = (event) => {
    setInput(event.target.value);
  };
  

  const search = (event) => {
    event.preventDefault();
   
    let foundItem=[];
    if(input.length>0){
        for( let task of todos){
            if(task.task.includes(input)){
                foundItem.push({task:task.task,id:task.id,isDone:task.isDone,isOptions:false,isEdit:false});
            }
        }
        console.log(foundItem);
    }
    // if(foundItem.length>0){
        setSearchItems([...foundItem]); // Store all matched tasks

    // }   
}



let markAsDoneSearchitem=(id1)=>{
    console.log("searh done")
    setSearchItems((arr)=>{
        return arr.map((todo)=>{

            if(todo.id==id1){
                return {...todo,isDone:!todo.isDone};
            }else{
                return{... todo};
            }
        })

    });
}

let deleteSearchItem=(id)=>{
    setSearchItems((arr)=>{ 
       return  arr.filter((todo)=> { return todo.id!=id;});
})
}

 
let addNewTask=()=>{
    setTodos((arr)=>{
        return [...arr,{task:newTodo,id:uuidv4(),isDone:false,isOptions:false,isEdit:false}];
        
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
    setSearchItems((arr)=>{
return arr.map((todo)=>{
            return  {...todo,isDone:true};
     });


 } );
    
}
let markAsDone=(id)=>{
    console.log("tododone")
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


let onEditTodo=(id)=>{

    setTodos((arr)=>{
        return arr.map((todo)=>{

            if(todo.id==id){
                return {...todo,isEdit:!todo.isEdit};
            }else{
                return{... todo};
            }
        })
    }
    )


        

}

let onEditSearchItem=(id)=>{

    setSearchItems((arr)=>{
        return arr.map((todo)=>{

            if(todo.id==id){
                return {...todo,isEdit:!todo.isEdit};
            }else{
                return{... todo};
            }
        })
    }
    )


        

}

let EditSearch=(id,input)=>{
    // console.log("njins");
    setSearchItems((arr)=>{

       return  arr.map((item)=>{
            if(item.id==id ){
                return {...item,task:input,isEdit:false};
            }else{
                return {...item};

            }

        })
    });

}

let EditTodo=(id,input)=>{
    // console.log("njins");
    setTodos((arr)=>{

       return  arr.map((item)=>{
            if(item.id==id ){
                return {...item,task:input,isEdit:false};
            }else{
                return {...item};

            }

        })
    });

}


    return (
        <div className="todo-container">
            <Search EditTodo={EditTodo} EditSearch={EditSearch} onEditSearchItem={onEditSearchItem} setSearchItems={setSearchItems} deleteSearchItem={deleteSearchItem} searchItems={searchItems} search={search} changeInput={changeInput} input={input} setTodos={setTodos}  markAsDone={markAsDone} deleteTodo={deleteTodo} markAsDoneSearchitem={markAsDoneSearchitem} todos={todos}></Search>
<h1 >Today's Task!</h1>
            <Add updateTodoValue={updateTodoValue} newTodo={newTodo} addNewTask={addNewTask}/> 
            
            <br />
<hr />

<Task EditTodo={EditTodo} EditSearch={EditSearch} onEditTodo={onEditTodo}  todos={todos} setTodos={setTodos}deleteSearchItem={deleteSearchItem} markAsDoneSearchitem={markAsDoneSearchitem} deleteTodo={deleteTodo} markAsDone={markAsDone} markAllDone={markAllDone}></Task>
           </div>
    );
}
