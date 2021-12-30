import React from 'react';

import './Button.css';

export const Button = ({ buttonText, onClick, type, className }) => (
	<button type={type} onClick={onClick} className={`btn + ${className}`}>
		{buttonText}
	</button>
);
