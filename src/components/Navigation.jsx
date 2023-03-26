import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {

	return (
		<>
			<header className='container'>
				<div className="logo-container">
					<Link to='/' className='logo'>
						<img
							src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
							alt='Logo Pokedex'
						/>
					</Link>
				</div>
			</header>

			<Outlet />
		</>
	);
};