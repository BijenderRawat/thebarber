import { redirect } from 'react-router-dom';
import EditShopForm from './EditShopForm';

import { BarberProfile_getkeydataURL } from '../../../../Loader/urlLoader';

const EditShop = () => {
  return <EditShopForm />;
}

export default EditShop;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const newData = { shop_name: formdata.get('shopname') }
  await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
    method: 'PATCH',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return redirect('..');
}