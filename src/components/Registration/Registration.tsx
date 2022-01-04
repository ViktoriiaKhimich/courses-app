import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import useForm from '../../hooks/useForm';
import { REGISTER } from '../../constants';

import './Registration.css';

const Registration = () => {
	const navigate = useNavigate();

	const onSubmit = async () => {
		const newUser = {
			name: values.user_name,
			email: values.user_email,
			password: values.user_password,
		};

		try {
			await axios.post('http://localhost:3000/register', newUser);
			navigate('/login');
		} catch (error) {
			throw new Error(error);
		}
	};

	const { values, handleChange, handleSubmit } = useForm(onSubmit);

	return (
		<div className='registration'>
			<form onSubmit={handleSubmit} className='registration__form'>
				<Input
					className='registration__input'
					labelText='Name'
					placeholderText='Enter name'
					inputId='user_name'
					inputName='user_name'
					type='text'
					value={values.user_name}
					onChange={handleChange}
				/>
				<Input
					className='registration__input'
					labelText='Email'
					placeholderText='Enter email'
					inputId='user_email'
					inputName='user_email'
					type='text'
					value={values.user_email}
					onChange={handleChange}
				/>
				<Input
					className='registration__input'
					labelText='Password'
					placeholderText='Enter password'
					inputId='user_password'
					inputName='user_password'
					type='text'
					value={values.user_password}
					onChange={handleChange}
				/>
				<Button
					type='submit'
					buttonText={REGISTER}
					className='registration__btn'
				/>
				<p>
					If you have an account you can{' '}
					<Link to='/login' className='redirect'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Registration;
