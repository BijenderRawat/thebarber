import { Form, useNavigation } from 'react-router-dom';
import classes from './ChangePasswordForm.module.css';
const ChangePasswordForm = () => {
  const navigation = useNavigation();
  return <Form method='post' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor="new-password">New Password</label>
      <input type="password" name="new-password" id="new-password" minLength="7" maxLength="14" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Changing Password' : 'Change Password'}</button>
    </div>
  </Form>;
}
export default ChangePasswordForm;