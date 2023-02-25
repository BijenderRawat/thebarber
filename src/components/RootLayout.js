import { Outlet, redirect } from 'react-router-dom';

import Navbar from './MainPageComponents/Navbar/Navbar';
import Content from './MainPageComponents/Content/Content';
import Footer from './MainPageComponents/Footer/Footer';

import { checkForToken } from '../Loader/auth';

const RootLayout = () => {
	return <>
	<Navbar />
	<Content />
	<Footer />
	<Outlet />
	</>;
}

export default RootLayout;

export const action = async({ request }) => {
	const token = await checkForToken();
	if(!token){
		return redirect('jointhecommunity/authentication');
	}
	return redirect('jointhecommunity/profile');
}