import { redirect } from 'react-router-dom';
import EditShopLocationForm from './EditShopLocationForm';

import { BarberProfile_getkeydataURL } from '../../../../Loader/urlLoader';

const EditShopLocation = () => {
  return <EditShopLocationForm />;
}

export default EditShopLocation;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const newData = { shop_location: formdata.get('shoplocation') }
  await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('..');
}