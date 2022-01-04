import React from 'react';

import './Button.css';

interface Props {
	buttonText: string;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
	className?: string;
}

export const Button = ({ buttonText, onClick, type, className }: Props) => (
	<button type={type} onClick={onClick} className={`btn + ${className}`}>
		{buttonText}
	</button>
);
