
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Icon({specificTask,changeTasks,tasks}){

    
    let onOptions=()=>{
        console.log(specificTask);

        for(let task of tasks){
            if(task.id==specificTask.id){
                task.isOptions=!task.isOptions;
            }
        }

// console.log(todos);
        changeTasks((tasks)=>{
return [...tasks];
        });
    






    }
return(

        <div>
            <MoreVertIcon onClick={onOptions}></MoreVertIcon>
        </div>
    );
}