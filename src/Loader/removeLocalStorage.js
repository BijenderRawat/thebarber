export function removeLocalStorage() {
	localStorage.removeItem('token');
	localStorage.removeItem('expiration');
	localStorage.removeItem('uid');
	localStorage.removeItem('key');
}