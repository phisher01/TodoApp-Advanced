

import { useScrollTrigger } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./Edit.css"
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
export default function Edit({task,EditSearch,EditTodo}){

    // console.log("task");
    let [input,setInput]=useState(task.task);
    let updateInput=(event)=>{
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form reload
        EditSearch(task.id, input); // Call the Edit function
        EditTodo(task.id, input); // Call the Edit function
    };
    return (

        <div className="edit" >
            <form onSubmit={handleSubmit} >

            <TextField
          
          id="outlined-size-small"
          defaultValue={input}
          sx={{ width: '50%' }}
          size="small"
          onChange={updateInput}
          /> 
          <br />
          <br />
          <Button  type="submit" variant="contained" color="success"  size="small"  startIcon={<ThumbUpIcon/>} >
          Edit

</Button>


          </form>




        </div>



    );
}