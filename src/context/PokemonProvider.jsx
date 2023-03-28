import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';
import axios from 'axios';

export const PokemonProvider = ({ children }) => {
	const [allPokemons, setAllPokemons] = useState([]);
	const [globalPokemons, setGlobalPokemons] = useState([]);
	const [offset, setOffset] = useState(0);

	// Utilizar CustomHook - useForm
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

	// Estados para la aplicación simples
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState(false);

	// lLamar 50 pokemones a la API
	const getAllPokemons = async (limit = 50) => {
		const baseURL = 'https://pokeapi.co/api/v2/';
		const res = await axios(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);

		const promises = res.data.results.map(async pokemon => {
			const res = await axios(pokemon.url);
			return res.data;
		});
		const results = await Promise.all(promises);

		setAllPokemons([...allPokemons, ...results]);
		setLoading(false);
	};

	// Llamar todos los pokemones
	const getGlobalPokemons = async () => {
		const baseURL = 'https://pokeapi.co/api/v2/';
		const res = await axios(`${baseURL}pokemon?limit=100000&offset=0`);

		const todosPokemons = res.data.results;
		const pokemonURLs = todosPokemons.map(pokemon => pokemon.url);
		axios.all(pokemonURLs.map((url) => axios.get(url))).then(
			(data) => {
				const results = data.map(pokemon => pokemon.data);
				setGlobalPokemons(results);
				setLoading(false);
			}
		);
	};

	// Llamar a un pokemon por ID
	const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await axios(`${baseURL}pokemon/${id}`);
		return res.data;
	};

	useEffect(() => {
		getAllPokemons();
	}, [offset]);

	useEffect(() => {
		if (globalPokemons.length == 0) getGlobalPokemons();
	}, []);

	// BTN CARGAR MÁS
	const onClickLoadMore = () => {
		setOffset(offset + 50);
	};

	// Filter Function + State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

	const [filteredPokemons, setfilteredPokemons] = useState([]);

	const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredPokemons([...filteredResults]);
		}
	};

	return (
		<PokemonContext.Provider
			value={{
				valueSearch,
				onInputChange,
				onResetForm,
				allPokemons,
				globalPokemons,
				getPokemonByID,
				onClickLoadMore,
				// Loader
				loading,
				setLoading,
				// Btn Filter
				active,
				setActive,
				// Filter Container Checkbox
				handleCheckbox,
				filteredPokemons,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};