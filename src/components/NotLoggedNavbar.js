import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/auth-context'

const NotLoggedNavbar = () => {
	const authCtx = useContext(AuthContext);
	const isLoggedIn = authCtx.isLoggedIn;
	const logoutHandler= () => {
    authCtx.logout();
    // optional: the code to redirect the user at the main navigation page can be added here
  }
	return(
		<>
		<div className={classes.main_div}>

      	<div className={classes.div_logo}>
		<Link to='/'>
		<h1>Welcome to thebarber community</h1>
		</Link>
		</div>

		<div className={classes.button_area}>
        <ul>
        {!isLoggedIn && <li><Link to='/auth'>Login</Link></li>}
        {isLoggedIn && <li><Link to='/profile'>Profile</Link></li>}
        {isLoggedIn && <li><button onClick={logoutHandler}>Logout</button></li>}
        </ul>
		</div>

		</div>
		</>
		);
}

export default NotLoggedNavbar;