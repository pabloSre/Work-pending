import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContex';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    
    <h1 className='title'>
      {completedTodos} tareas completadas de {totalTodos} 
    </h1>
    /* <h2 className={`title ${props.completed ? 'title-complete' :''}`}>
      Congratulations work's are ENDED!
    </h2>
    </div> */
  );
}

export { TodoCounter };