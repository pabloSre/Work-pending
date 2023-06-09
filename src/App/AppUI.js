import React from 'react';
import { TodoCounter  } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContex';

  function AppUI() {
    const 
      {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);
    
  return (
<>{/* simula react.fragment */}
      <TodoCounter/>
      <TodoSearch />

        <TodoList>{/* map crea un array  apartir del array inicial YANO*/}
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}{/* si no estamos cargando, y no hay todos osea igual a 0 crea tu primer todo */}
  
        {searchedTodos.map(todo => (/* renderizar SOLO los que estan en el estado */
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </TodoList>
      
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};

export { AppUI };
