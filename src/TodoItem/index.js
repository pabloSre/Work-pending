import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodoItem(props) {
  return (
    <li className='Items'>
      <DeleteIcon 
      
      onDelete={props.onDelete}
      />
      {/* operador ternario */}
      

      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>{props.text}</p>
      
      
      <CompleteIcon 
        completed={props.completed}/* si segun props era true o false, agarra una clase u otra */
        onComplete={props.onComplete}
      />
    </li>
  );
}

export{ TodoItem }; 