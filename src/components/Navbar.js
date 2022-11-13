import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.main_div}>

		<div className={classes.div_logo}>
		<h1>thebarber.com</h1>
		</div>

		<div className={classes.button_area}>
		<button type="button">Join thebarber community</button>
		</div>

		</div>
		);
}

export default Navbar;