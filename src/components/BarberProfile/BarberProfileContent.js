import classes from './BarberProfileContent.module.css'
import {NavLink} from 'react-router-dom'
import Footer from '../Footer'

const BarberPrfileContent = () => {
  return (
    <div className={classes.main_div}>

    <div className={classes.sub_div_1}>

    <div className={classes.security_info}>
    <NavLink to='/jointhecommunity/profile/security' activeClassName={classes.active}>Security</NavLink>
    </div>

    <div className={classes.personal_info}>
    <NavLink to='/jointhecommunity/profile/personal_info' activeClassName={classes.active}>Profile</NavLink>
    </div>
    
    <div className={classes.shop_info}>
    <NavLink to='/jointhecommunity/profile/shop' activeClassName={classes.active}>Shop</NavLink>
    </div>

    </div>

    <div className={classes.sub_div_2}>
    
    <div className={classes.payment_info}>
    <NavLink to='/jointhecommunity/profile/payments' activeClassName={classes.active}>Payments</NavLink>
    </div>

    <div className={classes.other_info}>
    <NavLink to='/jointhecommunity/profile/payments' activeClassName={classes.active}>Payments</NavLink>
    </div>

    <div className={classes.other_info_2}>
    <NavLink to='/jointhecommunity/profile/payments' activeClassName={classes.active}>Payments</NavLink>
    </div>

    </div>
    
    </div>
    );
}

export default BarberPrfileContent;