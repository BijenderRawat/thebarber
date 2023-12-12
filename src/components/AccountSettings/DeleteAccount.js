import { redirect } from 'react-router-dom';

import { DeleteAccountURL, BarberProfile_getkeydataURL } from '../../Loader/urlLoader';
import { removeLocalStorage } from '../../Loader/removeLocalStorage';
import DeleteAccountForm from './DeleteAccountForm';

const DeleteAccount = () => {
	return <DeleteAccountForm />;
}

export default DeleteAccount;

export const action = async () => {
	await fetch(DeleteAccountURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			idToken: localStorage.getItem('token')
		})
	});
	await fetch(BarberProfile_getkeydataURL + `${localStorage.getItem('key')}.json`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	removeLocalStorage();
	return redirect('/');
}