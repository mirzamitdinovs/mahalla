import React from 'react';

const CustomDataTable = ({ title, keys, data }) => {
	return (
		<div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
			<h2 className='text-white text-3xl my-3 mx-3 '>{title}</h2>
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs text-white uppercase '>
					<tr>
						{keys.map((item, index) => (
							<th key={index} scope='col' className='py-3 px-6'>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data['Andijon'].map((item, mainIndex) => (
						<tr
							key={mainIndex}
							className={` border-b ${mainIndex % 2 !== 0 && 'bg-[#29265A]'}`}
						>
							<td className='p-5 text-white'>{Object.keys(item)[0]}</td>
							{Object.keys(data).map((region, index) => (
								<td key={index} className='py-4 px-6'>
									{Object.values(data[region][mainIndex])[0]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CustomDataTable;
