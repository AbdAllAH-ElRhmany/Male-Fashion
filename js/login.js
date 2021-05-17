// Login Function

// setUp Variables

let LoginForm = document.querySelector('.sign-form');

let login = (e) => {
	'use strict';
	e.preventDefault();
	let useremail = e.target.email.value;
	let userpass = e.target.pass.value;
	if (localStorage.getItem('user')) {
		let user = JSON.parse(localStorage.getItem('user'));
		if (userpass !== user.pass || useremail !== user.email) {
			openOverlay();
			$('.massage').fadeIn();
			$('.massage p').text('Your information is incorrect');
		} else {
			openOverlay();
			$('.massage').fadeIn();
			$('.massage p').text('Welcome ' + user.name);
			setTimeout(() => {
				window.location.assign('index.html');
			}, 1500);
		}
	} else if (useremail === '' || userpass === '') {
		$('.massage').fadeIn();
		$('.massage p').text('Empty Field');
	} else {
		openOverlay();
		$('.massage').fadeIn();
		$('.massage p').text('Please Create Account First');
	}
};

LoginForm.addEventListener('submit', login);
