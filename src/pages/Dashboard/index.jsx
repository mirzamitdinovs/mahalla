import CustomSelect from 'components/CustomSelect';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import countriesData from 'data/countries.json';
import districtsData from 'data/districts.json';
import neighborhoodData from 'data/neighborhood.json';
import { useState } from 'react';
import CustomDataTable from 'components/CustomDataTable';
import tableData from 'data/tableData.json';
import tableData2 from 'data/tableData2.json';

const Dashboard = () => {
	const [values, setValues] = useState({
		region: '',
		district: '',
		neighborhood: '',
	});

	const handleChangeValues = (key, value) => {
		setValues({
			...values,
			[key]: value,
		});
	};

	const handleSubmit = () => {
		const { region, district, neighborhood } = values;
		if (region && district && neighborhood) {
			console.log('values: ', values);
			navigate(`/mahalla/${values.neighborhood}`);
		}
	};

	console.log('values: ', values);

	const navigate = useNavigate();
	return (
		<div>
			Dashboard
			<div className='grid grid-cols-6 gap-4'>
				<CustomSelect
					data={countriesData}
					handleChange={(val) => handleChangeValues('region', val)}
					placeholder='Viloyatni tanlang'
				/>
				<CustomSelect
					data={
						values.region
							? districtsData.filter((item) => item.region_id == values.region)
							: []
					}
					handleChange={(val) => handleChangeValues('district', val)}
					placeholder='Tumanni tanlang'
				/>
				<CustomSelect
					data={
						values.district
							? neighborhoodData.filter(
									(item) => item.district_id == values.district
							  )
							: []
					}
					handleChange={(val) => handleChangeValues('neighborhood', val)}
					placeholder='Mahallani tanlang'
				/>
				<Button title='Mahallani pasporti' clbFunc={handleSubmit} />
			</div>
			<div className='mt-10 bg-[#3C3971] py-5'>
				<CustomDataTable
					title={'Mahalla idoralari ma’lumotlari'}
					keys={["Ma'lumot", ...Object.keys(tableData)]}
					data={tableData}
				/>
			</div>
			<div className='mt-10 bg-[#3C3971] py-5'>
				<CustomDataTable
					title='Ichki ishlar ob’yetktlari ma’lumotlari'
					keys={["Ma'lumot", ...Object.keys(tableData2)]}
					data={tableData2}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
