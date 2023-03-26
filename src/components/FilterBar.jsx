import { PokemonContext } from "../context/PokemonContext";
import React, { useContext } from "react";

export const FilterBar = () => {
    const { active, handleCheckbox, setActive } = useContext(PokemonContext);

    return (
        <div className={`container-filters ${active ? 'active' : ''}`}>
            <div className="close-filter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => setActive(!active)}><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>            </div>
            <div className="filter-by-type">
                <span>Tipo</span>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="grass"
                        id="grass"
                    />
                    <label htmlFor="grass">Planta</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="fire"
                        id="fire"
                    />
                    <label htmlFor="fire">Fuego</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="bug"
                        id="bug"
                    />
                    <label htmlFor="bug">Bicho</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="fairy"
                        id="fairy"
                    />
                    <label htmlFor="fairy">Hada</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="dragon"
                        id="dragon"
                    />
                    <label htmlFor="dragon">Dragón</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="ghost"
                        id="ghost"
                    />
                    <label htmlFor="ghost">Fantasma</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="ground"
                        id="ground"
                    />
                    <label htmlFor="ground">Tierra</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="normal"
                        id="normal"
                    />
                    <label htmlFor="normal">Normal</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="psychic"
                        id="psychic"
                    />
                    <label htmlFor="psychic">Psíquico</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="steel"
                        id="steel"
                    />
                    <label htmlFor="steel">Acero</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="dark"
                        id="dark"
                    />
                    <label htmlFor="dark">Siniestro</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="electric"
                        id="electric"
                    />
                    <label htmlFor="electric">Eléctrico</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="fighting"
                        id="fighting"
                    />
                    <label htmlFor="fighting">Lucha</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="flying"
                        id="flying"
                    />
                    <label htmlFor="flying">Volador</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="ice"
                        id="ice"
                    />
                    <label htmlFor="ice">Hielo</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="poison"
                        id="poison"
                    />
                    <label htmlFor="poison">Veneno</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="rock"
                        id="rock"
                    />
                    <label htmlFor="rock">Roca</label>
                </div>
                <div className="group-type">
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                        name="water"
                        id="water"
                    />
                    <label htmlFor="water">Agua</label>
                </div>
            </div>
        </div>
    );
};
