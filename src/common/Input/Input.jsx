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
		<div className='input'>
			<label htmlFor={inputId}>{labelText}</label>
			<input
				value={value}
				className={`text__field + ${className}`}
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
