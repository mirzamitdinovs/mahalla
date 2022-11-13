import React from 'react';

const CustomSelect = ({ data, handleChange }) => {
	return (
		<div className='w-full'>
			<select
				onChange={(e) => handleChange(e.target.value)}
				className='form-select appearance-none h-full
block
w-full
px-3
py-1.5
text-base
font-normal
bg-[#3C3971] bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
 focus:outline-none'
				aria-label='Default select example'
			>
				{data.map((item, index) => (
					<option value={item.id} key={index}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default CustomSelect;
