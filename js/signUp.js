// SignUp Function

// setUp Variables

let signUpForm = document.querySelector('#signUpForm');

let signUp = (e) => {
	'use strict';
	e.preventDefault();
	let username = e.target.name.value;
	let useremail = e.target.email.value;
	let userpass = e.target.pass.value;
	let userpassConf = e.target.passConf.value;
	if (username === '' || useremail === '' || userpass === '' || userpassConf === '') {
		$('.massage').fadeIn();
		$('.massage p').text('Empty Field');
	} else {
		if (userpass !== userpassConf) {
			openOverlay();
			$('.massage').fadeIn();
			$('.massage p').text('The two passwords do not match');
		} else {
			let user = {
				name: username,
				email: useremail,
				pass: userpass,
			};
			localStorage.setItem('user', JSON.stringify(user));
			openOverlay();
			$('.massage').fadeIn();
			$('.massage p').text('Thank you for registering Please Login Now');
			setTimeout(() => {
				window.location.assign('login.html');
			}, 1500);
		}
	}
};

signUpForm.addEventListener('submit', signUp);
