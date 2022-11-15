import classes from './Instruction.module.css'
import {NavLink} from 'react-router-dom'
import HomeButton from '../components/UI/HomeButton'

const Instruction = () => {
	return(
		<div className={classes.main_div}>

		<div className={classes.home_div}>
		<HomeButton />
		</div>

		<div className={classes.instruction_div}>
		<ul>
		<li>Hello</li>
		<li>Hi</li>
		</ul>
		</div>
		
		<div className={classes.next_div}>
		<NavLink to="" activeClassName={classes.active}>Next</NavLink>
		</div>
		
		</div>
		);
}

export default Instruction;