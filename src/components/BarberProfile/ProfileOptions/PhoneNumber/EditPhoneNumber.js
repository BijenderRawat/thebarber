import { redirect } from 'react-router-dom';
import EditPhoneNumberForm from './EditPhoneNumberForm';

import { BarberProfile_getkeydataURL } from '../../../../Loader/urlLoader';

const EditPhoneNumber = () => {
  return <EditPhoneNumberForm />;
}

export default EditPhoneNumber;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const newData = { phonenumber: formdata.get('phonenumber') }
  await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('..');
}