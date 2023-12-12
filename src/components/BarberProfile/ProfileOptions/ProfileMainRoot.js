import { Outlet } from 'react-router-dom';

import ProfileOptionsNavbar from './ProfileOptionsNavbar';

const ProfileMainRoot = () => {
	return <>
		<ProfileOptionsNavbar />
		<Outlet />
	</>;
}

export default ProfileMainRoot;