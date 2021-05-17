// Overlay Open And Close, Small Devices Nav, Search Control

$(document).ready(function () {
	'use strict';
	$('.small-nav-icon').click(function () {
		openOverlay();
		$('.side-nav').animate({ left: '0px', opacity: '1' }, 500);
		$('.side-nav').css({ visibility: 'visible' });
	});

	$('.overlay').click(closeOverlay);
	$('.overlay2').click(closeOverlay2); // For Small Devices search

	$('#searchIcon').click(function () {
		openOverlay2();
		$('.search-form').fadeIn();
	});

	$('.closeIcon').click(closeIcon);
	$('.closeIcon2').click(closeIcon2);
});

function closeOverlay() {
	'use strict';
	$('.overlay').fadeOut();
	$('.overlay2').fadeOut();
	$('.side-nav').animate({ left: '-300px', opacity: '0', visibility: 'hidden' }, 500);
	$('.search-form').fadeOut();
	$('.massage').fadeOut();
}
function closeOverlay2() {
	// For Small Devices search
	'use strict';
	$('.overlay2').fadeOut();
	$('.search-form').fadeOut();
}
function openOverlay() {
	'use strict';
	$('.overlay').animate({ opacity: '1 ' }, 500);
	$('.overlay').css({ display: 'block', visibility: 'visible' });
}
// For Small Devices search
function openOverlay2() {
	'use strict';
	$('.overlay2').animate({ opacity: '1 ' }, 500);
	$('.overlay2').css({ display: 'block', visibility: 'visible' });
}

function closeIcon() {
	'use strict';
	$('.overlay').fadeOut();
	$('.overlay2').fadeOut();
	$(this).parent().fadeOut();
}
// For Small Devices search
function closeIcon2() {
	'use strict';
	$('.overlay2').fadeOut();
	$(this).parent().fadeOut();
}
