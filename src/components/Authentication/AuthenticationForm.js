import { Form, useSearchParams, useNavigation, Link, useActionData } from 'react-router-dom'
import classes from './AuthenticationForm.module.css';

const AuthenticationForm = () => {

  const data = useActionData();
  const [ searchParams ] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {
          data && data.errors && <ul>
          {
            Object.values(data.errors).map(err => <li key={err}>{err}</li>)
          }
          </ul>
        }
        {
          data && data.message && <p>{data.message}</p>
        }
      <Form method='post'>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type="email" name="email" id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type="password" name="password" id='password' required />
        </div>
        <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Create new account' : 'Login with existing account'}</Link>
        <button>{isSubmitting ? 'Sending Request....' : isLogin ? 'Login' : 'Create Account' }</button>
        </div>
      </Form>
    </section>
  );
};

export default AuthenticationForm;
