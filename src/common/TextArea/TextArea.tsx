import React from 'react';

import './TextArea.css';

interface Props {
	value: string;
	inputId: string;
	inputName: string;
	labelText?: string;
	placeholderText?: string;
	onChange: (e: any) => void;
	className?: string;
}

const TextArea = ({
	value,
	inputId,
	inputName,
	labelText,
	placeholderText,
	onChange,
	className,
}: Props) => {
	return (
		<div className='textarea__container'>
			<label htmlFor={inputId}>{labelText}</label>
			<textarea
				value={value}
				className={`textarea__field + ${className}`}
				name={inputName}
				id={inputId}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

export default TextArea;
