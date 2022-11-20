import classes from './BarberProfile.module.css'
import Navbar from '../Navbar'
import BarberProfileContent from './BarberProfileContent'

const BarberProfile = () => {
	return (
		<section className={classes.profile}>
		<Navbar />
		<BarberProfileContent />
		</section>
		);
}

export default BarberProfile;