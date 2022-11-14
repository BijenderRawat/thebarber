import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

	return (
		<div className={classes.main_div}>

		<div className={classes.div_logo}>
		<h1>thebarber.com</h1>
		</div>

		<div className={classes.button_area}>
		<NavLink to="./jointhecommunity" activeClassName={classes.active}>Join thebarber community</NavLink>
		</div>

		</div>
		);
}

export default Navbar;