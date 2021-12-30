import React from 'react';
import './TextArea.css';

const TextArea = ({
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
		<div className='textarea'>
			<label htmlFor={inputId}>{labelText}</label>
			<textarea
				value={value}
				className={`textarea__field + ${className}`}
				type={type}
				name={inputName}
				id={inputId}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextArea;
