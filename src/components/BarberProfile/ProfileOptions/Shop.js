import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BarberProfile_getkeydataURL } from '../../../Loader/urlLoader';
import classes from './Shop.module.css';

const Shop = () => {

	const [shopname, setShopName] = useState();
	const [shoplocation, setShopLocation] = useState();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadUserData = async () => {
			const response = await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`);
			const responseData = await response.json();
			setIsLoading(false);
			setShopName(responseData.shop_name);
			setShopLocation(responseData.shop_location);
		}
		loadUserData();
	}, []);

	return <div className={classes.shop_div}>
		<ul className={classes.main_shop_list}>
			<li>
				<NavLink to='editshopname' className={classes.shopname}>
					Name
					{isLoading ? <p>Loading...</p> : <p style={{ color: 'black' }}>{shopname}</p>}
				</NavLink>
			</li>
			<li>
				<NavLink to='editshoplocation' className={classes.shoplocation}>
					Location
					{isLoading ? <p>Loading...</p> : <p style={{ color: 'black' }}>{shoplocation}</p>}
				</NavLink>
			</li>
		</ul>
	</div>;
}
export default Shop;