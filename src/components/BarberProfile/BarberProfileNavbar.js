import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RatingManager from './RatingManager';
import { BarberProfile_getkeydataURL } from '../../Loader/urlLoader';
import { removeLocalStorage } from '../../Loader/removeLocalStorage';

import classes from './BarberProfileNavbar.module.css';

const BarberProfileNavbar = () => {

	const [shopstatus, setShopStatus] = useState();
	const [shopstatusdisplay, setShopStatusDisplay] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		setShopStatusDisplay('Loading...');
		fetchShopStatus();
	}, []);

	const fetchShopStatus = async () => {
		const response = await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`);
		const responseData = await response.json();
		setShopStatus(responseData.shop_status);
		responseData.shop_status ? setShopStatusDisplay('Online') : setShopStatusDisplay('Offline');
	}

	const clickButtonHandler = async () => {
		setShopStatusDisplay('Switching...');
		const data = {
			shop_status: !shopstatus
		}
		await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		fetchShopStatus();
	}

	const shop_status_style = `${classes.shopstatus_area} ${shopstatus ? classes.shopstatus_area_green : classes.shopstatus_area_black}`;

	return <div className={classes.profile_main_div}>

		<div className={classes.div_logo}>

			<section className={classes.left_section}>
				<h1 style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); }}>thebarber.com</h1>
			</section>

			<section className={classes.right_section}>
				<h1>welcome you</h1>
			</section>

		</div>

		<div className={classes.rating_area}>

			<div className={classes.barber_div}>

				<section className={classes.rating_category_name}>Your Rating</section>
				<section className={classes.rating_category_rating}>
					<RatingManager />
				</section>

			</div>

			<div className={classes.shop_div}>

				<section className={classes.rating_category_name}>Shop Rating</section>
				<section className={classes.rating_category_rating}>
				</section>

			</div>

		</div>

		<div className={shop_status_style}>
			<button onClick={clickButtonHandler}>{shopstatusdisplay}</button>
		</div>

		<div className={classes.logout_area}>
			<button onClick={() => {
				removeLocalStorage();
				navigate('/');
			}}>Logout</button>
		</div>

	</div>;
}

export default BarberProfileNavbar;