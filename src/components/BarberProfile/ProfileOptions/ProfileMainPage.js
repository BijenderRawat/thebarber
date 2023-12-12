import { useParams } from 'react-router-dom';

import Payment from './Payment';
import PersonalInfo from './PersonalInfo';
import Security from './Security';
import Shop from './Shop';

const ProfileMainPage = () => {
	const params = useParams();
	let content;
	if (params.profileoption === 'security') {
		content = <Security />;
	}
	else if (params.profileoption === 'personal') {
		content = <PersonalInfo />;
	}
	else if (params.profileoption === 'shop') {
		content = <Shop />;
	}
	else if (params.profileoption === 'payment') {
		content = <Payment />;
	}
	else {
		content = <p style={{ textAlign: 'center', color: 'blue' }}>Resource Not found</p>;
	}
	return <>
		{content}
	</>;

}

export default ProfileMainPage;