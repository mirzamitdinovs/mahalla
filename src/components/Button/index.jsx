import React from 'react';

const Button = ({ title, clbFunc, color }) => {
	return (
		<div
			className={` py-3 px-5 text-center cursor-pointer ${
				color ? color : 'bg-[#3C3971]'
			}`}
			onClick={clbFunc}
		>
			{title}
		</div>
	);
};

export default Button;
