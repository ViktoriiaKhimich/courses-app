import React from 'react';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import { LOGOUT_BTN } from '../../constants';

import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<div className='header_rigth'>
				<p className='user_name'>Viktoriia</p>
				<Button buttonText={LOGOUT_BTN} />
			</div>
		</header>
	);
};

export default Header;
