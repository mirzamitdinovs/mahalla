import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className='h-screen w-full flex justify-center items-center text-white flex-col'>
			<h1 className='mb-5'>Page not found :(</h1>
			<Link to='/'>Back to Home page</Link>
		</div>
	);
};

export default PageNotFound;
