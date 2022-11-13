import classes from './Content.module.css'
import Button from './UI/Button'
import Sort from './UI/Sort'

const Content = () => {

	const clickHandler = () => {

	}
	return (
		<div className={classes.main_div}>

		<div className={classes.map_div}>
		<h1 style={{color:"white"}}>This is temporary space for map API</h1>
		</div>

		<div className={classes.right_main_div}>

		<div className={classes.shop_list}>

		<div className={classes.shop_list_navbar}>
		<Button label="location" onClick={clickHandler} />

		<div className={classes.shop_list_control}>
		<Sort />
		</div>
		</div>
		
		</div>

		<div className={classes.shop_info}>
		
		</div>

		</div>

		</div>
		);
}

export default Content;