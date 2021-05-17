let log = document.getElementById('log');
let smlog = document.getElementById('sm-log');
let userLinks = document.getElementById('userLink');
let smuserLinks = document.getElementById('sm-userLink');
let logOut = document.getElementById('logOut');
let smlogOut = document.getElementById('sm-logOut');
let user = JSON.parse(localStorage.getItem('user'));
let userDom = document.querySelectorAll('.username');

if (user) {
	log.remove();
	smlog.remove();
	userLinks.style.display = 'inline';
	smuserLinks.style.display = 'inline';
	userDom.forEach((i) => {
		i.style.textTransform = 'none';
		i.innerHTML = user.name;
	});
}

logOut.addEventListener('click', logout);
smlogOut.addEventListener('click', logout);

function logout() {
	localStorage.clear();
	setTimeout(() => {
		window.location.assign('signUp.html');
	}, 1500);
}
