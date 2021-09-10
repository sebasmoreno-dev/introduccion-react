import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import{ TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error</p>}
        {loading && <p>Estamo cargando 🤗...</p>}
        {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer TODO! 😁😁</p>}


        {searchedTodos.map(todo => (
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //Marcamos el todo como completado
            onDelete={() => deleteTodo(todo.text)} //Eliminamos en todo
            />
        ))}
      </TodoList>

    <CreateTodoButton />
</React.Fragment>
);
}

export { AppUI };