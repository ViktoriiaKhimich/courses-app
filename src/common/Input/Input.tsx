import React from 'react';

import './Input.css';

interface Props {
	value: string | number;
	inputId: string;
	type: 'text' | 'number';
	inputName: string;
	labelText?: string;
	placeholderText?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const Input = ({
	value,
	inputId,
	type,
	inputName,
	labelText,
	placeholderText,
	onChange,
	className,
}: Props) => {
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
