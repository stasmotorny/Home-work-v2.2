let login = 'name';
let pas = '111';
let enterLogin = prompt('Enter login');
while (enterLogin !== login) {
	alert('Login is wrong. Try again.');
	enterLogin = prompt('Enter login');
}
if (enterLogin === login) {
	for (i = 1; i <= 3; i++) {
		let enterPas = prompt('Enter password');
		if (enterPas === pas) {
			alert('Welcome');
			break;
		} else {
				alert('Wrong password. Try again.' + ' ' + (3 - i) + ' tryes left.');
		}
	}
}