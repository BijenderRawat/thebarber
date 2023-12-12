import { json, redirect } from 'react-router-dom';

import AuthenticationForm from './AuthenticationForm';
import AuthenticationNavbar from './AuthenticationNavbar';
import { Database_BarberInformationURL } from '../../Loader/urlLoader';

const Authentication = () => {
  return <>
    <AuthenticationNavbar />
    <AuthenticationForm />
  </>;
}

export default Authentication;

export const action = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
    returnSecureToken: true
  }

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'unsupported mode' }, { status: 422 });
  }

  let response;

  if (mode === 'login') {
    response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbQRcvh7E2oaFjqmmJCCyspfFyS74e5pk', {
      method: 'POST',
      body: JSON.stringify(authData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbQRcvh7E2oaFjqmmJCCyspfFyS74e5pk', {
      method: 'POST',
      body: JSON.stringify(authData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  if (!response.ok) {
    throw json({ message: 'could not authenticate user' }, { status: 500 });
  }

  const resData = await response.json();

  const token = resData.idToken;
  const tokenexpiresIn = resData.expiresIn;
  const uid = resData.localId;

  localStorage.setItem('token', token);
  localStorage.setItem('uid', uid);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + tokenexpiresIn / 3600);
  localStorage.setItem('expiration', expiration.toISOString());

  if (mode === 'signup') {
    await fetch(Database_BarberInformationURL, {
      method: 'POST',
      body: JSON.stringify({
        uid,
        name: '',
        phonenumber: '',
        upi_id: '',
        shop_name: '',
        shop_location: '',
        shop_status: false
      }),
      header: {
        'Content-Type': 'application/json'
      }
    });
  }

  const responseForKey = await fetch(Database_BarberInformationURL);
  const responseForKeyData = await responseForKey.json();
  for (const key in responseForKeyData) {
    if (responseForKeyData[key].uid === uid) {
      localStorage.setItem('key', key);
      break;
    }
  }

  return redirect('/jointhecommunity/profile');
}