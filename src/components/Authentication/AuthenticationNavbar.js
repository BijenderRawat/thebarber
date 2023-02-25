import classes from './AuthenticationNavbar.module.css'

import { useNavigate } from 'react-router-dom'

const AuthenticationNavbar = () => {

	const navigate = useNavigate();
	const navigateToHomeHandler = () => {
		navigate('/');
	}

	return (
		<div className={classes.main_div}>

		<button onClick={navigateToHomeHandler}>Welcome to thebarber community</button>

		</div>
		);
}

export default AuthenticationNavbar;