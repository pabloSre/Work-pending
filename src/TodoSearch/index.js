import { TodoContext } from '../TodoContex';
import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
  return (
    <input 
      className="Search" 
      placeholder="buscar tarea" 
      value={searchValue}
      onChange= {(event) => {
        setSearchValue(event.target.value);/* funcion actualizadora de estado */
      }}
      />
  );
}

export { TodoSearch };