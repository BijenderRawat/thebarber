import { redirect } from 'react-router-dom';
import EditUPIForm from './EditUPIForm';

import { BarberProfile_getkeydataURL } from '../../../../Loader/urlLoader';

const EditUPI = () => {
  return <EditUPIForm />;
}

export default EditUPI;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const newData = { upi_id: formdata.get('upi_id') }
  await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('..');
}