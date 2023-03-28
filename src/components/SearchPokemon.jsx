import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchPokemon = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    
    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('/search', {
            state: input,
        });
        onResetForm();
    };

    return (
        <form onSubmit={onSearchSubmit} className="input-i-boton">
            <div className='form-group'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='icon-search'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
                </svg>
                <input type='search' name='valueSearch' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Buscar Pokémon'/>
            </div>

            <button className='btn-search'>Buscar</button>
        </form>
    )
}

export default SearchPokemon