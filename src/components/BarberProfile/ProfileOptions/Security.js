import { NavLink } from 'react-router-dom';

import classes from './Security.module.css'

const Security = () => {
	return <div className={classes.main_security_div}>
		<ul className={classes.security_list}>
			<li>
				<NavLink to='changepassword' className={classes.change_password}>Change Password</NavLink>
			</li>
			<li>
				<NavLink to='deleteaccount' className={classes.delete_account}>Delete Account</NavLink>
			</li>
		</ul>
	</div>;
}

export default Security;