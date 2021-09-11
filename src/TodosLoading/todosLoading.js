import React from 'react';
import './todosLoading.css';

function TodosLoading() {
    return <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className="LoadingTodo-delteIcon"></span>
    </div>;
}

export { TodosLoading };
