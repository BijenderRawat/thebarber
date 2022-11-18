import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/auth-context'

const Navbar = () => {
	const authCtx = useContext(AuthContext);
	let to;
	if(authCtx.isLoggedIn){
		to='/jointhecommunity/profile';
	}else{
		to='/jointhecommunity/authentication';
	}
	return (
		<div className={classes.main_div}>

      	<div className={classes.div_logo}>
		<h1>thebarber.com</h1>
		</div>

		<div className={classes.button_area}>
		<NavLink to={to} activeClassName={classes.active}>Join thebarber community</NavLink>
		</div>

		</div>
		);
}

export default Navbar;