import { NavLink } from 'react-router-dom'
import classes from './BarberProfileContent.module.css'

const BarberProfileContent = () => {
  return <div className={classes.content_main_div}>

    <div className={classes.content_sub_div_1}>

      <div className={classes.security_info}>
        <NavLink to='security'>Security</NavLink>
      </div>

      <div className={classes.personal_info}>
        <NavLink to='personal'>Profile</NavLink>
      </div>

    </div>

    <div className={classes.content_sub_div_2}>

      <div className={classes.shop_info}>
        <NavLink to='shop'>Shop</NavLink>
      </div>

      <div className={classes.payment_info}>
        <NavLink to='payment'>Payments</NavLink>
      </div>

    </div>

  </div>;
}

export default BarberProfileContent;