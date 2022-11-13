import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecureRouter from 'layouts/SecureRouter';
import Mahalla from 'pages/Mahalla';
import PageNotFound from 'pages/PageNotFound';

function App() {
	return (
		<div className='bg-[#171142] h-screen overflow-hidden text-white'>
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={
							<SecureRouter>
								<Dashboard />
							</SecureRouter>
						}
					/>
					<Route
						path={'/mahalla/:id'}
						element={
							<SecureRouter>
								<Mahalla />
							</SecureRouter>
						}
					/>
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
