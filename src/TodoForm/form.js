import React from 'react';
import { TodoContext } from '../TodoContext/index'
import './form.css';

function TodoForm() {
  //Logica de la apliación
  //Vamos a consumir el estado con useContext
 const [newTodoValue, setNewTodoValue] = React.useState('') //Creamos un estado local dentro del mismo componente


  const {
    addTodo, //importamos esta función de nuestro contexto
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value); /* al setNewTodoValue le enviamo el nuevo valor de event.target.value */
  };
  const onCancel = () => {
    setOpenModal(false); //este metodo cierra nuestro modal
  };
  const onSubmit = (event) => { //El envio de los formularios en un evento de los usuarios
    event.preventDefault(); //este metodo es genial cancela el comportamiento estandar del form
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}> {/* en el evento onSubmit llamamos a nuestro evento onSubmit */}
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe tu TODO
          ヾ(^▽^*)))"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-buttonContainer--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>

          <button
            type="submit" //recibimos el evento de envio de nuestro formulario
            className="TodoForm-buttonContainer--add"
          >
            Añadir
          </button>
        </div>



    </form>
  )
}

export { TodoForm };
