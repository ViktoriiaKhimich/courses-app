import React from 'react';

import Input from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import { SEARCH_BTN } from '../../../../constants';

import './SearchBar.css';

const SearchBar = ({ value, onChange, onClick }) => {
	return (
		<div className='search__toolbar'>
			<Input
				value={value}
				onChange={onChange}
				className='search__toolbar__input'
				inputId='course'
				inputName='course'
				type='text'
				placeholderText='Enter course name or id ...'
			/>
			<Button type='button' buttonText={SEARCH_BTN} onClick={onClick} />
		</div>
	);
};

export default SearchBar;
