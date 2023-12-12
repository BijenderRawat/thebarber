import { useNavigation, Form } from 'react-router-dom';
import classes from './EditUPIForm.module.css';

const EditUPIForm = () => {
  const navigation = useNavigation();
  return <Form method='POST' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='upi_id'>Enter Your UPIID</label>
      <input type="text" id="upi_id" name="upi_id" maxLength="20" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Saving...' : 'Save'}</button>
    </div>
  </Form>;
}

export default EditUPIForm;