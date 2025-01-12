
import './App.css'
import TodoList from './TodoList'
import Welcome from './Welcome'
import { useState } from 'react';
function App() {
  

  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div className="app-container">
      {!isStarted ? <Welcome onStart={handleStart} /> : <TodoList />}
    </div>
  );

}

export default App
