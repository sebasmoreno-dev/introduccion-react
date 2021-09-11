import React from 'react';
import reactDom from 'react-dom';
import './modal.css';

//Aqui llamamos a react dom.createPortal
function Modal({ children }) {
    return reactDom.createPortal(
        <di className="ModalBackground">
            {children}
        </di>,
        document.getElementById('modal')
    );
}

export { Modal };


