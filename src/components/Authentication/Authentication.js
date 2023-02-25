import { json, redirect } from 'react-router-dom'

import AuthenticationForm from './AuthenticationForm'
import AuthenticationNavbar from './AuthenticationNavbar'

const Authentication = () => {

	return <>
		<AuthenticationNavbar />
		<AuthenticationForm />
		</>;
}

export default Authentication;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;

  const mode = searchParams.get('mode') || 'signup';
  if(mode !== 'login' && mode !== 'signup'){
    throw json({ message: 'unsupported mode' }, { status: 422 });
  }

  let url;
  if(mode === 'login'){
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbQRcvh7E2oaFjqmmJCCyspfFyS74e5pk';
  }else{
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAbQRcvh7E2oaFjqmmJCCyspfFyS74e5pk';
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(!response.ok){
    throw json({ message: 'could not autheticate user'}, { status: 500 });
  }

  // here we are extacting the token from the response
  const resData = await response.json();
  const token = resData.idToken;
  const expiresIn = resData.expiresIn;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours()+expiresIn);
  localStorage.setItem('expiration', expiration.toISOString());
  
  return redirect('/jointhecommunity/profile');
}