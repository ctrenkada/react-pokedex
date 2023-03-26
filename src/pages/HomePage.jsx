import React, { useContext } from "react";
import { FilterBar, PokemonList } from "../components";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
    const { onClickLoadMore, active, setActive, onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
    const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};
    
    return (
        <>
            <div className="container-filter container">
                <div className="icon-filter" onClick={() => setActive(!active)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        />
                    </svg>
                    <span>Filtrar</span>
                </div>
				<form onSubmit={onSearchSubmit} className="input-i-boton">
					<div className='form-group'>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='icon-search'>
							<path strokeLinecap='round'strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/>
						</svg>
						<input type='search' name='valueSearch' id='' value={valueSearch} onChange={onInputChange} placeholder='Introduce pokemon'/>
					</div>

					<button className='btn-search'>Buscar</button>
				</form>
            </div>
            <PokemonList />
            <FilterBar />
            <div className="container-btn-load-more container">
                <button className="btn-load-more" onClick={onClickLoadMore}>
                    Cargar más
                </button>
            </div>
        </>
    );
};
