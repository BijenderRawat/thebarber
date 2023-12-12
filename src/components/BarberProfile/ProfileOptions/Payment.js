import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { BarberProfile_getkeydataURL } from '../../../Loader/urlLoader';

import classes from './Payment.module.css';

const Payment = () => {
	const [upiID, setupiID] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadUserData = async () => {
			const response = await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`);
			const responseData = await response.json();
			setIsLoading(false);
			setupiID(responseData.upi_id);
		}
		loadUserData();
	}, []);
	return <div className={classes.main_payment_div}>
		<ul className={classes.main_payment_list}>
			<li>
				<NavLink to='editupi' className={classes.upi_id}>
					UPI ID
					{isLoading ? <p>Loading...</p> : <p style={{ color: 'black' }}>{upiID}</p>}
				</NavLink>
			</li>
		</ul>
	</div>;
}

export default Payment;

export const action = async ({ request }) => {

} 