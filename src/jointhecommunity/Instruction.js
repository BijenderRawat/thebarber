import classes from './Instruction.module.css'
import {NavLink} from 'react-router-dom'
import HomeButton from '../components/UI/HomeButton'

const Instruction = () => {
	return(
		<div classsName={classes.main_div}>

		<HomeButton />

		<main classsName={classes.instruction}>
		
		<ol>
		<li></li>
		</ol>
		</main>

		<NavLink to="" activeClassName={classes.active}>Next</NavLink>
		
		</div>
		);
}

export default Instruction;