import { Link } from 'react-router-dom'
import classes from './ProfileOptionsNavbar.module.css'
const ProfileOptionsNavbar = () => {
	return <div className={classes.profileoption_main_div}>
		<Link to='..' relative='path'>Back</Link>
	</div>;
}
export default ProfileOptionsNavbar;