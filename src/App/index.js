import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContex';

function App() {/* componente */
  return (
    <TodoProvider>
    <AppUI />
    </TodoProvider>
  );
}

export default App;
