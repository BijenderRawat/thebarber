import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { BarberProfile_getkeydataURL } from '../../../Loader/urlLoader';
import classes from './PersonalInfo.module.css';

const PersonalInfo = () => {
	const [username, setUsername] = useState();
	const [usercontact, setUsercontact] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadUserData = async () => {
			const response = await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`);
			const responseData = await response.json();
			setIsLoading(false);
			setUsername(responseData.name);
			setUsercontact(responseData.phonenumber);
		}
		loadUserData();
	}, []);

	return <div className={classes.main_personalinfo_div}>
		<ul className={classes.main_personalinfo_list}>
			<li>
				<NavLink to='editname' className={classes.name}>
					Name
					{isLoading ? <p>Loading...</p> : <p style={{ color: 'black' }}>{username}</p>}
				</NavLink>
			</li>
			<li>
				<NavLink to='editphonenumber' className={classes.phonenumber}>
					Phone Number
					{isLoading ? <p>Loading...</p> : <p style={{ color: 'black' }}>{usercontact}</p>}
				</NavLink>
			</li>
		</ul>
	</div>;
}

export default PersonalInfo;