import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



//React.Fragment Super util para remplazar la cantida de divs
function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
