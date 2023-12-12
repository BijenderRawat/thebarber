import { Form, useSearchParams, useNavigation, Link } from 'react-router-dom'
import classes from './AuthenticationForm.module.css';

const AuthenticationForm = () => {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get('mode') === 'signup';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <section className={classes.auth}>
      <h1>{isSignup ? 'Sign Up' : 'Log In'}</h1>
      <Form method='post'>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type="email" name="email" id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type="password" name="password" id='password' minLength='7' required />
        </div>
        <div className={classes.actions}>
          <Link to={`?mode=${isSignup ? 'login' : 'signup'}`}>{isSignup ? 'Login with existing one' : 'Create new account'}</Link>
          <button>{isSubmitting ? 'Sending Request....' : isSignup ? 'Create Account' : 'Login'}</button>
        </div>
      </Form>
    </section>
  );
};

export default AuthenticationForm;