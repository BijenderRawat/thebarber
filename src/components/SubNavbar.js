import classes from './SubNavbar.module.css'
import {NavLink, Link} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/auth-context'

const SubNavbar = props => {

	const authCtx = useContext(AuthContext);

	const isLoggedIn = authCtx.isLoggedIn;

  	const logoutHandler= () => {
    	authCtx.logout();
    	// optional: the code to redirect the user at the main navigation page can be added here
  	}
  	
	return (
		<>
		{!authCtx.isLoggedIn && (
			<div className={classes.button_area}>
			<NavLink to='/jointhecommunity/authentication' activeClassName={classes.active}>Join thebarber community</NavLink>
			</div>
			)}

		{authCtx.isLoggedIn && (
			// <div className={classes.button_area}>
			// <NavLink to='/jointhecommunity/profile' activeClassName={classes.active}>Join thebarber community</NavLink>
			// </div>

			<>
			<Link to='/'>
        	<div className={classes.logo}>
        	<h1>Welcome to thebarber community</h1>
        	</div>
      		</Link>

			<ul>
        	<li><Link to='/profile'>Profile</Link></li>
        	<li><button onClick={logoutHandler}>Logout</button></li>
        	</ul>

        	</>
			)}

		</>
		);
}

export default SubNavbar;