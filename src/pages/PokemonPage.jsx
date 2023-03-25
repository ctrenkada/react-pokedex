import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula } from "../helper/helper";
import { Loader } from "../components";

export const PokemonPage = () => {
    const { getPokemonByID } = useContext(PokemonContext);
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const { id } = useParams();

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (
        <main className="container main-pokemon">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="header-main-pokemon">
                        {
                            pokemon.id < 100 ? (
                                <span className="number-pokemon">#{pokemon.id}</span>
                            ) : (
                                <span className="number-pokemon" style={{ fontSize: "200px" }}>#{pokemon.id}</span>
                            )
                        }
                        <div className="container-img-pokemon">
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={`Pokemon ${pokemon?.name}`} />
                        </div>

                        <div className="container-info-pokemon">
                            <h1>{primerMayuscula(pokemon.name)}</h1>
                            <div className="card-types info-pokemon-type">
                                {pokemon.types.map((type) => (
                                    <span
                                        key={type.type.name}
                                        className={`${type.type.name}`}
                                    >
                                        {primerMayuscula(type.type.name)}
                                    </span>
                                ))}
                            </div>
                            <div className="info-pokemon">
                                <div className="group-info">
                                    <p>Altura</p>
                                    <span>{pokemon.height * 10 / 200}m</span>
                                </div>
                                <div className="group-info">
                                    <p>Peso</p>
                                    <span>{pokemon.weight}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container-stats">
                        <div className="stats-title">
                            <h1>Estadísticas</h1>
                        </div>
                        <div className="stats">
                            <div className="stat-group">
                                <span>HP</span>
                                <progress className="progress-bar" value={pokemon.stats[0].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[0].base_stat}
                                </span>
                            </div>
                            <div className="stat-group">
                                <span>Ataque</span>
                                <progress className="progress-bar" value={pokemon.stats[1].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[1].base_stat}
                                </span>
                            </div>
                            <div className="stat-group">
                                <span>Defensa</span>
                                <progress className="progress-bar" value={pokemon.stats[2].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[2].base_stat}
                                </span>
                            </div>
                            <div className="stat-group">
                                <span>Ataque especial</span>
                                <progress className="progress-bar" value={pokemon.stats[3].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[3].base_stat}
                                </span>
                            </div>
                            <div className="stat-group">
                                <span>Defensa especial</span>
                                <progress className="progress-bar" value={pokemon.stats[4].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[4].base_stat}
                                </span>
                            </div>
                            <div className="stat-group">
                                <span>Velocidad</span>
                                <progress className="progress-bar" value={pokemon.stats[5].base_stat} max="200"></progress>
                                <span className="counter-stat">
                                    {pokemon.stats[5].base_stat}
                                </span>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <div className="container-shiny">
                        <h1>Shiny</h1>
                        <div className="container-img-pokemon-shiny">
                            <img src={pokemon.sprites.other["official-artwork"].front_shiny} alt={`hola`}/>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};
