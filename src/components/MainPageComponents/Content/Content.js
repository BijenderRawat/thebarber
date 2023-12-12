import classes from './Content.module.css';
import Button from '../../UI/Button';
import Sort from '../../UI/Sort';
import AuthenticationForm from '../../Authentication/AuthenticationForm';
import BarberProfile from '../../BarberProfile/BarberProfile';

const Content = () => {

	const locationClickHandler = () => {
		navigator.geolocation.getCurrentPosition(position => {
			localStorage.setItem('latitude', position.coords.latitude);
			localStorage.setItem('longitude', position.coords.longitude);
		});
	}

	return <div className={classes.main_div}>

		<div className={classes.map_div}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449025.63132271206!2d76.19054897343753!3d28.449032199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6bb18c31279b%3A0x11d335a5bc228dd6!2sSt.%20Andrews%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1682849582988!5m2!1sen!2sin"
				width="672"
				height="561"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade">
			</iframe>
		</div>

		<div className={classes.right_main_div}>

			<div className={classes.shop_list}>

				<div className={classes.shop_list_navbar}>
					<Button label="location" onClick={locationClickHandler} />

					<div className={classes.shop_list_control}>
						<Sort />
					</div>
				</div>

			</div>

			<div className={classes.shop_info}>
				{
					localStorage.getItem('token') ? <BarberProfile /> : <AuthenticationForm />
				}
			</div>

		</div>

	</div>;
}

export default Content;