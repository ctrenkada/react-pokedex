import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from '../context/PokemonContext';
import {CardPokemon} from '../components/CardPokemon';

export const SearchPage = () => {
    const location = useLocation();
    const { globalPokemons } = useContext(PokemonContext);
    let filteredPokemons;
    if(location.state == undefined) filteredPokemons = globalPokemons;
    else filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

    return (
        <div className="container">
            <p className="p-search">
                Se encontraron <span>{filteredPokemons.length}</span> resultados:
            </p>
            <div className="card-list-pokemon cotnainer">
                {
                filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)
                }
            </div>
        </div>
    );
};
