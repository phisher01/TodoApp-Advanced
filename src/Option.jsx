

import DeleteIcon from '@mui/icons-material/Delete';

import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';


export default function Option({deleteTodo,markAsDone,task,markAsDoneSearchitem,onEdit,deleteSearchItem}){

   



    return (
        <div>
             
              <DeleteIcon  fontSize='small' className="delete-btn" onClick={  ()=>{  deleteTodo(task.id);deleteSearchItem(task.id)  } } ></DeleteIcon>
              &nbsp;
              <CheckIcon fontSize='small' style={task.isDone?{backgroundColor:"#C5A24B"}:{}}   className="Done-btn" onClick={  ()=>{ markAsDone(task.id); markAsDoneSearchitem(task.id)}}>{task.isDone?"Mark as not done":"Mark As Done"}</CheckIcon>
              &nbsp;
              
                <EditIcon fontSize='small' style={{background:"cyan"}}  onClick={()=>{onEdit(task.id)}}   className="Done-btn"></EditIcon>
        </div>

    );
}