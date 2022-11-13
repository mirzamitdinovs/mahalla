import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecureRouter = ({ children }) => {
	const [loader, setLoader] = useState(true);
	const [toggleSidebar, setToggleSidebar] = useState(true);
	const userToken = localStorage.getItem('token');
	const navigate = useNavigate();
	useEffect(() => {
		if (!userToken) {
			navigate('/signin');
		}
		setLoader(false);
	}, []);

	if (loader) return <Loader />;
	return (
		<div>
			<Navbar
				handleToggleSidebar={() => setToggleSidebar((prevValue) => !prevValue)}
			/>
			<div>
				<Sidebar toggleSidebar={toggleSidebar} />
				<div
					className={` h-screen overflow-auto p-5 transition ease-in-out delay-300 ${
						toggleSidebar ? 'ml-64' : 'ml-0'
					}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default SecureRouter;
