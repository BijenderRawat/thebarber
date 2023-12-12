import { useNavigation, Form } from 'react-router-dom';
import classes from './EditShopLocationForm.module.css';

const EditShopLocationForm = () => {
  const navigation = useNavigation();
  return <Form method='POST' className={classes.form}>
    <div className={classes.control}>
      <label htmlFor='shoplocation'>Enter Your Shop Address</label>
      <h6 style={{ color: 'red', marginTop: 0, marginBottom: '0.5rem' }}>Enter correct address for precise location</h6>
      <input type="text" id="shoplocation" name="shoplocation" maxLength="80" required />
    </div>
    <div className={classes.action}>
      <button>{navigation.state === 'submitting' ? 'Saving...' : 'Save'}</button>
    </div>
  </Form>;
}

export default EditShopLocationForm;