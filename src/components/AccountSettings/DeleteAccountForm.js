import { Form, useNavigation } from 'react-router-dom';
import classes from './DeleteAccountForm.module.css';
const DeleteAccountForm = () => {
  const navigation = useNavigation();
  return <Form method='post' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor="deleteaccount">Are you sure you want to delete your account???</label>
      <input type="checkbox" name="deleteaccount" id="deleteaccount" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Deleting Your Account' : 'Delete My Account'}</button>
    </div>
  </Form>;
}
export default DeleteAccountForm;