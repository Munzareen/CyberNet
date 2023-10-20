import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import CompanyDetails from './pages/companyDetails';
import AuthRoutes from './routes/AuthRoutes';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route element={<AuthRoutes />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/company-details' element={<CompanyDetails />} />
			</Routes>
		</div>
	);
}

export default App;
