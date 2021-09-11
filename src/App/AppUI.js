import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import{ TodoItem } from '../TodoItem/TodoItem';
import{ TodoForm } from '../TodoForm/form';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/modal';
import { TodosError } from '../TodosError/todosError';
import { TodosLoading } from '../TodosLoading/todosLoading';
import { EmptyTodos } from '../EmptyTodos/emptyTodos';


function AppUI() { //llamamos React Context
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
        {error && <TodosError error={error} />}
        {loading &&  new Array(4).fill(1).map((a, i)=> <TodosLoading key={i} />) } {/* Esto nos permite cargar varios skeletons de TODOs */}
        {(!loading && !searchedTodos.lenght) && <EmptyTodos />}


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