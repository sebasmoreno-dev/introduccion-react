import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


function TodoSearch() { //las variables son llamadas usando useContext importando el contexto TodoContext
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Busca tu TODO"
            value={searchValue}
            onChange={onSearchValueChange}
            />
    );
}

export { TodoSearch };
