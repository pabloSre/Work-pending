import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();/* createcontext  */


function TodoProvider({children}) {
  const {
    item: todos, 
    saveItem: saveTodos,/* renombrar objetos con ": saveTodos" */
    loading,
    error,
   } = useLocalStorage('TODOS_V1', []);/* ESTADO = TODOS */
  
  const [searchValue, setSearchValue] = React.useState('');
  
  const [openModal, setOpenModal] = React.useState(false);/* 
  console.log('Los usuarios buscan todos de ' + searchValue); */
  /*[set'SearchValue'] es por la palabra que UNO MISMO ELIGE funcion actualizable */
   /* vacio para que aparezca el place holder //ASI EMPIEZA*/
  
  const completedTodos = todos.filter(
    todo => !!todo.completed/* !!doble negacion convierte en boleeano cualquier cosa que tenga[true o folse]*/
    ).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {/* puede ser remplazado el return por "()" */
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );/* buscar todos */

  const addTodo = (text) => {
    saveTodos();
    const newTodos = [...todos];/* ...traer lo que venga */
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  
  const completeTodo = (text) => {
    const newTodos = [...todos];/* ...traer lo que venga */
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];/* ...traer lo que venga */
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
);
}
export {TodoContext, TodoProvider};

/* localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos) );
  localStorage.removeItem('TODOS_V1') 
  const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro a React.js', completed: false},
  { text: 'Cortar tomate', completed: true},
  { text: '!"#!#!"$%!%"#!"#%"', completed: false},
  { text: '!!!!!!!!!!!!!!!esto es una tarea completada', completed: true}, */
