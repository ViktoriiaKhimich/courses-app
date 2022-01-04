import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { LOGOUT_BTN } from '../../constants';

import './Header.css';

const Header = () => {
	const navigate = useNavigate();

	const isAuthorised = localStorage.getItem('access_token');

	const handleLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/login');
	};

	return (
		<header className='header'>
			<Logo />
			{isAuthorised && (
				<div className='header__right__side'>
					<p className='user__name'>Viktoriia</p>
					<Button buttonText={LOGOUT_BTN} onClick={handleLogout} />
				</div>
			)}
		</header>
	);
};

export default Header;
