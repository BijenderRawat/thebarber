import {useRef} from 'react'

import {useHistory} from 'react-router-dom'
import classes from './ChangePassword.module.css';

const ChangePassword = () => {

  const history = useHistory();

  const newPasswordRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;
    // ..validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAjmebQnJBsD1Gv093hWUcmoNuKlJn6A9I', {
      method: 'POST',
      body: JSON.stringify({
        // here the token is used inside the body. but for some other end point, may be you have to add it in the
        // query parameter .i.e. inside and at the end of URL. And maybe in some other end point, it needs to be 
        // added inside the header.

        // So basically it depends on the API that you are using.
        // idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      header: {
        'Content-Type': 'application/json'
      }
    }).then(err => {
      // assumption is that it always succeed
      alert("Password Changed");
      history.replace('/');
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minlength="7" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ChangePassword;
