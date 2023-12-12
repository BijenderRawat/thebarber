import { useNavigation, Form } from 'react-router-dom';
import classes from './EditPhoneNumberForm.module.css';

const EditPhoneNumberForm = props => {
  const navigation = useNavigation();
  return <Form method='POST' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='phonenumber'>Enter Your Phone Number</label>
      <input type="numeric" id="phonenumber" name="phonenumber" minLength="10" maxLength="10" required />
      <button>Get OTP</button>
      <input type="numeric" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Adding...' : 'Add'}</button>
    </div>
  </Form>;
}

export default EditPhoneNumberForm;