import { useState } from "react";
import Welcome from "./Welcome"
import TodoList from './TodoList'


export default function Final(){



  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="final-container">
      {!isStarted ? <Welcome onStart={handleStart} /> : <TodoList />}
    </div>
  );

}