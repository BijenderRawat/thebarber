import classes from './Navbar.module.css'
import SubNavbar from './SubNavbar'

const Navbar = () => {
	
	return (
		<div className={classes.main_div}>

      	<div className={classes.div_logo}>
		<h1>thebarber.com</h1>
		</div>

		<SubNavbar />

		</div>
		);
}

export default Navbar;