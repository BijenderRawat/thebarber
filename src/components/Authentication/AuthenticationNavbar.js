import { useNavigate } from 'react-router-dom';
import classes from './AuthenticationNavbar.module.css';
const AuthenticationNavbar = () => {
	const navigate = useNavigate();
	return <div className={classes.main_div}>
		<button onClick={() => { navigate('/'); }}>Welcome to thebarber community</button>
	</div>;
}
export default AuthenticationNavbar;