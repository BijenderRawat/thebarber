import classes from './Navigation.module.css'
import {Link} from 'react-router-dom'
import AuthContext from '../context/auth-context'
import {useContext} from 'react'

const Navigation = () => {
	const authCtx = useContext(AuthContext);
  	const isLoggedIn = authCtx.isLoggedIn;

  	const logoutHandler= () => {
    	authCtx.logout();
    	// optional: the code to redirect the user at the main navigation page can be added here
  	}
	return (
		<header className={classes.header}>
      	<Link to='/'>
        	<div className={classes.logo}>
        	<h1>Welcome to thebarber community</h1>
        	</div>
      	</Link>
      	<nav>
        	<ul>
        	{!isLoggedIn && (
          	<li>
            	<Link to='/auth'>Login</Link>
          	</li>
        	)}
      		{isLoggedIn && (
        		<li>
            	<Link to='/profile'>Profile</Link>
        		</li>
      		)}
      		{isLoggedIn && (
        		<li>
            	<button onClick={logoutHandler}>Logout</button>
          		</li>
        	)}
        	</ul>
      	</nav>
    	</header>
	);
}

export default Navigation;