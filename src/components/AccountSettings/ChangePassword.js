import { json, redirect } from 'react-router-dom';

import { ChangePasswordURL } from '../../Loader/urlLoader';
import ChangePasswordForm from './ChangePasswordForm';

const ChangePassword = () => {
  return <ChangePasswordForm />;
}

export default ChangePassword;

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const data = {
    idToken: localStorage.getItem('token'),
    password: formdata.get('new-password'),
    returnSecureToken: true
  }

  const response = await fetch(ChangePasswordURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw json({ message: 'Password Cannot be changed' }, { status: 500 });
  }

  const resData = await response.json();
  const newtoken = resData.idToken;
  const expiresIn = resData.expiresIn;
  localStorage.setItem('token', newtoken);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + expiresIn);
  localStorage.setItem('expiration', expiration.toISOString());
  return redirect('/jointhecommunity/profile');
}