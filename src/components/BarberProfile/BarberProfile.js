import classes from './BarberProfile.module.css'
import Navigation from '../../jointhecommunity/Navigation'
import BarberProfileContent from './BarberProfileContent'

const BarberProfile = () => {
	return (
		<section className={classes.profile}>
		<Navigation />
		<BarberProfileContent />
		</section>
		);
}

export default BarberProfile;