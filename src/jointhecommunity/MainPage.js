import { useEffect } from 'react';

import { useNavigate, Outlet } from 'react-router-dom';

import { checkForToken } from '../Loader/auth';

const MainPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = checkForToken();
		if(token === null){
		navigate('authentication');
	}

	if(token){
		navigate('profile');
	}
	});

	return <Outlet />;
}

export default MainPage;