import classes from './Footer.module.css'

const Footer = () => {
	return (
		<div className={classes.main_div}>

		<div className={classes.div_1}>
		<div className={classes.sub_div1}>
		
		<ul className={classes.div_links}>
		<p>Connect with us</p>
		<li><a href="https://www.instagram.com/bjndrrwt/">Instagram</a></li>
		<li><a href="https://www.linkedin.com/in/bjndrrwt/">Linkedin</a></li>
		<li><a href="https://www.youtube.com/channel/UC1zEneHqK2pekUfG5gtBzlw">YouTube</a></li>
		<li><a href="https://www.linkedin.com/in/bjndrrwt/">Facebook</a></li>
		<li><a href="https://www.linkedin.com/in/bjndrrwt/">Twitter</a></li>
		</ul>
		
		</div>
		</div>

		<div className={classes.div_2}>

		<h3>thebarber.com</h3>
		<h5>2022</h5>
		</div>

		</div>
		);
}

export default Footer;