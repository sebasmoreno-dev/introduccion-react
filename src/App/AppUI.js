import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import{ TodoItem } from '../TodoItem/TodoItem';
import{ TodoForm } from '../TodoForm/form';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/modal';


function AppUI() {
  const {//hacemos el llamado a todas las propiedades que necesitamos
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext); //este es un reack hook useContext

    return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error</p>}
        {loading && <p>Estamos cargando 🤗...</p>}
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

      {/* aqui llamamos al componenete modal con la teletransportación */}
      {!!openModal && (
        <Modal>
          <TodoForm /> {/* Aqui enviamos el formulario para crear TODOs */}
      </Modal>
      )}

    {/* Aqui modificamos nuestro button */}
    <CreateTodoButton
      setOpenModal={setOpenModal}
    />
</React.Fragment>
);
}

export { AppUI };