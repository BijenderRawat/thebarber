import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {

	return <div className={classes.main_div}>

		<div className={classes.div_logo}>
			<h1>thebarber.com</h1>
		</div>

		<NavLink to='jointhecommunity'>Join thebarber community</NavLink>

	</div>;
}

export default Navbar;