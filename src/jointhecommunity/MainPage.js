import { useEffect } from 'react';

import { useNavigate, Outlet, useLoaderData } from 'react-router-dom';

const MainPage = () => {
	const token = useLoaderData();
	const navigate = useNavigate();

	useEffect(() => {
		if (!token || token === null) {
			navigate('authentication');
		} else {
			navigate('profile');
		}
	}, [token, navigate]);

	return <Outlet />;
}

export default MainPage;