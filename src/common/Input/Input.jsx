import React from 'react';

import './Input.css';

const Input = ({
	value,
	inputId,
	type,
	inputName,
	labelText,
	placeholderText,
	onChange,
	className,
}) => {
	return (
		<div className='textfield__container'>
			<label htmlFor={inputId}>{labelText}</label>
			<input
				value={value}
				className={`textfield + ${className}`}
				type={type}
				name={inputName}
				id={inputId}
				placeholder={placeholderText}
				onChange={(e) => onChange(e)}
			/>
		</div>
	);
};

export default Input;
