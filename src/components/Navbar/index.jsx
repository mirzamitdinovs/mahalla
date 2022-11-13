import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleToggleSidebar }) => {
	const [toggleAvatar, setToggleAvatar] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		let localUser = localStorage.getItem('token');
		if (localUser) {
			setUser(JSON.parse(localUser));
		}
	}, []);

	const openToggleAvatar = () => {
		if (!toggleAvatar) {
			setToggleAvatar(true);
		}
	};
	const closeToggleAvatar = () => {
		if (toggleAvatar) {
			setToggleAvatar(false);
		}
	};
	return (
		<div className='flex items-center bg-[#3C3971] '>
			<div className='flex justify-evenly items-center px-6 py-1 '>
				<img className='w-52 object-contain' src='/assets/images/logo.png' />
				<div className='cursor-pointer' onClick={handleToggleSidebar}>
					{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-8 h-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
						/>
					</svg>
				</div>
			</div>
			<div className=' w-full flex justify-between p-5 border-2 border-gray-500 border-t-0'>
				<h3>Admin</h3>
				<div
					onMouseEnter={openToggleAvatar}
					onMouseLeave={closeToggleAvatar}
					className='flex items-center relative px-5'
				>
					<div>{user.name || user.email}</div>
					<div className='ml-2 cursor-pointer '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							{toggleAvatar ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 15.75l7.5-7.5 7.5 7.5'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							)}
						</svg>
					</div>
					{toggleAvatar && (
						<div className='absolute top-6  left-0  w-full '>
							<div className='mb-5'></div>
							<ul className='bg-[#3C3971] w-full text-center p-5'>
								<li className='text-lg pb-2'>
									<Link href='/profile'>Profile</Link>
								</li>
								<li className='text-lg pb-2'>
									<Link href='/settings'>Settings</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
