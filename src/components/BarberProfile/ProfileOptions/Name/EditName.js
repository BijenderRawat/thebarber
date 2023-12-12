import { redirect } from 'react-router-dom';
import EditNameForm from './EditNameForm';

import { BarberProfile_getkeydataURL } from '../../../../Loader/urlLoader';

const EditName = () => {
  return <EditNameForm />;
}

export default EditName;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const newData = { name: formdata.get('name') }
  await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('..');
}