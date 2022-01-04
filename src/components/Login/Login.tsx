import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import useForm from '../../hooks/useForm';
import { LOGIN } from '../../constants';

import './Login.css';

const Login = () => {
	const isLogin = localStorage.getItem('access_token');
	const navigate = useNavigate();

	useEffect(() => {
		if (isLogin) {
			navigate('/courses');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = async () => {
		const user = {
			email: values.user_email,
			password: values.user_password,
		};

		try {
			const { data } = await axios.post('http://localhost:3000/login', user);
			localStorage.setItem('access_token', data.result);
			navigate('/courses');
		} catch (error) {
			throw new Error(error);
		}
	};

	const { values, handleChange, handleSubmit } = useForm(onSubmit);

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='login__form'>
				<Input
					className='login__input'
					labelText='Email'
					placeholderText='Enter email'
					inputId='user_email'
					inputName='user_email'
					type='text'
					value={values.user_email}
					onChange={handleChange}
				/>
				<Input
					className='login__input'
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
					buttonText={LOGIN}
					className='login__btn'
					onClick={undefined}
				/>
				<p>
					If you don't have an account you can{' '}
					<Link to='/registration' className='redirect'>
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
