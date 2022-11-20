import classes from './AuthenticationNavbar.module.css'

import {NavLink} from 'react-router-dom'

const AuthenticationNavbar = () => {

	return (
		<div className={classes.main_div}>

		<div className={classes.button_area}>
		<NavLink to='/' activeClassName={classes.active}>Welcome to thebarber community</NavLink>
		</div>

		</div>
		);
}

export default AuthenticationNavbar;