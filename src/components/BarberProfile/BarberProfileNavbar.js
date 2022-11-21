import classes from './BarberProfileNavbar.module.css'

const BarberProfileNavbar = () => {
	return(
		<div className={classes.main_div}>

      	<div className={classes.div_logo}>

      	<section className={classes.left_section}>
      	<h1>thebarber.com</h1>
      	</section>
      	
      	<section className={classes.right_section}>
      	<h1>welcome's you</h1>
      	</section>
		
		</div>

		<div className={classes.rating_area}>

		<div className={classes.barber_div}>	
		
		<section className={classes.rating_category_name}>Your Rating</section>
		<section className={classes.rating_category_rating}>
		</section>
		
		</div>

		<div className={classes.shop_div}>
		
		<section className={classes.rating_category_name}>Shop Rating</section>
		<section className={classes.rating_category_rating}>
		</section>
		
		</div>

		</div>

		</div>
		);
}

export default BarberProfileNavbar;