import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SIGN_UP } from 'services';

const SignUp = () => {
	const name = useRef(null);
	const phone = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await SIGN_UP({
			name: name.current.value,
			phone: phone.current.value,
			email: email.current.value,
			password: password.current.value,
		});
		if (res && res.status === 200) {
			localStorage.setItem('token', res.token);
			navigate('/');
		}
	};

	return (
		<div className='flex justify-center items-center h-full pr-10'>
			<div className='w-1/2 flex justify-center items-center '>
				<img className='w-2/3' src='/assets/images/logo-large.png' />
			</div>
			<div className='w-1/2 h-full flex items-center justify-center bg-opacity-10 bg-white text-white flex-col '>
				<h2 className='mb-52 text-3xl'>“Mahallabay” axborot tizimi</h2>
				<h3 className='mb-10 text-2xl'>Tizimga Ro'yxatga o'tish</h3>
				<form className='flex flex-col w-2/3' onSubmit={handleSubmit}>
					<input
						required
						type='text'
						placeholder='FIO'
						className='mb-5 p-3 text-gray-600'
						ref={name}
					/>
					<input
						required
						type='text'
						placeholder='Telefon'
						className='mb-5 p-3 text-gray-600'
						ref={phone}
					/>
					<input
						required
						type='email'
						placeholder='Логин'
						className='mb-5 p-3 text-gray-600'
						ref={email}
					/>
					<input
						required
						type='password'
						placeholder='Пароль'
						className='mb-5 p-3 text-gray-600'
						ref={password}
					/>
					<p className='mb-3'>
						Ro'yxatdan o'tganmisiz?{' '}
						<Link className=' text-blue-500 underline ml-3' to='/signin'>
							Tizimga kirish
						</Link>
					</p>
					<input
						className='bg-blue-500 p-3 cursor-pointer'
						type='submit'
						value='Войти'
					/>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
