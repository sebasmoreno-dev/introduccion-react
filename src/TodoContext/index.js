import React from 'react'
import { useLocalStorages } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorages('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  //Creamos un nuevo estado para el modal
  const [openModal, setOpenModal] = React.useState(false);



  const completedTodos = todos.filter(todo => !!todo.completed).length; //calcular todos realizados
  const totalTodos = todos.length; //total TODOs realizados

  //con esto realizamos el buscador de todos
  let searchedTodos = [];

  if(!searchValue.length >= 1) {
  searchedTodos = todos;
  } else {
  searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })
  }

  //Añadir un TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push ({ //Creamos un nuevo objeto dentro de nuestra nueva lista de TODOs
      completed: false,
      text
    })
    saveTodos(newTodos);
    };

  //Completando y eliminando Todos
  const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      //Aqui se guardan todas las funciones
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
  }}>
      {props.children}
    </TodoContext.Provider>
    );
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };