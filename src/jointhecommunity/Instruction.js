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
		<li>This is the first line</li>
		<li>This is the second line</li>
		<li>So on..........</li>
		</ul>
		</div>
		
		<div className={classes.next_div}>
		<NavLink to="" activeClassName={classes.active}>Next</NavLink>
		</div>
		
		</div>
		);
}

export default Instruction;