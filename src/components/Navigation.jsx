import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PokedexLogo from '../assets/pokedex_logo.png';

export const Navigation = () => {

	return (
		<>
			<header className='container'>
				<div className="logo-container">
					<Link to='/' className='logo'>
						<img
							src={PokedexLogo}
							alt='Logo Pokedex'
						/>
					</Link>
				</div>
			</header>

			<Outlet />
		</>
	);
};