import { NavLink } from 'react-router-dom'

import classes from './Footer.module.css'

const Footer = () => {
	return <div className={classes.main_div}>
		<div className={classes.div_1}>

			<div className={classes.sub_div_1}></div>

			<div className={classes.sub_div_2}>

				<div className={classes.sub_div_2_name}>Contact Us</div>
				<ul className={classes.list}>
					<li><NavLink to='https://www.instagram.com/bjndr2wt/' className={classes.links}>Instagram</NavLink></li>
					<li><NavLink to='https://www.linkedin.com/in/bjndrrwt/' className={classes.links}>Linkedin</NavLink></li>
					<li><NavLink to='https://www.youtube.com/@tekno864' className={classes.links}>YouTube</NavLink></li>
				</ul>
			</div>


			<div className={classes.sub_div_3}>
				<div className={classes.sub_div_2_name}>Know Us</div>
				<ul className={classes.list}>
					<li><NavLink to='about' className={classes.links}>About</NavLink></li>
				</ul>
			</div>

			<div className={classes.sub_div_4}></div>

		</div>

		<div className={classes.div_2}>
			<h3>&copy;thebarber.com</h3>
			<h5>2023</h5>
		</div>

	</div>;
}

export default Footer;