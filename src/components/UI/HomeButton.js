import classes from './HomeButton.module.css'
import {NavLink} from 'react-router-dom'

const HomeButton = () => {
	return(
		<NavLink to="/" activeClassName={classes.active}>Home</NavLink>
		);
}

export default HomeButton;