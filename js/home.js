$(document).ready(function () {
	'use strict';

	// Banner Section Slider

	$('.owl-carousel').owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: true,
		navText: ['<span>→</span>', '<span>←</span>'],
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 1200,
		autoplay: false,
		dots: false,
		autoHeight: false,
	});

	// Filter Products At home page

	mixitup('#container');

	$('.products .products-list button').on('click', function () {
		$(this).addClass('active').siblings('').removeClass('active');
	});
});

// Call Drow Product UI Function From script.js file

let homeProducts = products.filter((i) => i.inHome == 'y');
listProductUI(homeProducts);

// offer counter Section At home Page

function updatecounter() {
	'use strict';
	let now = new Date();
	var mon = now.getMonth() + 1;
	var year = now.getFullYear();
	let offerDate = new Date(`${mon + 1} 1  ${year}`);
	let dif = offerDate - now;
	let day = Math.floor(dif / 1000 / 60 / 60 / 24);
	let hour = Math.floor(dif / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(dif / 1000 / 60) % 60;
	let seconds = Math.floor(dif / 1000) % 60;
	$('#day h2').text(() => (day < 10 ? '0' + day : day));
	$('#hour h2').text(hour < 10 ? '0' + hour : hour);
	$('#minutes h2').text(minutes < 10 ? '0' + minutes : minutes);
	$('#second h2').text(seconds < 10 ? '0' + seconds : seconds);
}
setInterval(updatecounter, 1000);

// Call Drow Product UI Function From blogFunc.js file

drowBlogProUI(blogData, 3);
