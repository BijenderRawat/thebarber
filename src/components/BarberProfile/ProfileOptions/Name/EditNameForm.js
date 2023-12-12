import { useNavigation, Form } from 'react-router-dom';
import classes from './EditNameForm.module.css';

const EditNameForm = () => {
  const navigation = useNavigation();
  return <Form method='POST' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='name'>Enter Your Name</label>
      <input type="text" id="name" name="name" maxLength="20" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Saving...' : 'Save'}</button>
    </div>
  </Form>;
}

export default EditNameForm;