import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {
    const { allPokemons } = useContext(PokemonContext);

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemons.map((pokemon) => (
                    <CardPokemon
                        key={pokemon.id}
                        pokemon={pokemon}
                    ></CardPokemon>
                ))}
            </div>
        </>
    );
};
