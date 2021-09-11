import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState); /* Esta funcion nos va a devolver  el estado anterior a nuestra actualización - hace que se abra y cierre el modal*/
  }

  return (
    <button
        className="CreateTodoButton"
        onClick={onClickButton} //Esta es la funcion onClickButton
        >

        +

        </button>
  );
}

export { CreateTodoButton };