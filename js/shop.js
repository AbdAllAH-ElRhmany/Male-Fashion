// Make categories close Before Page Load

$('.categories').next().slideUp(0);
$('.categories.first').next().slideDown(0);
$(document).ready(function () {
	'use strict';

	// On Click On Category opens and close

	$('.categories').click(function () {
		$(this).next().slideToggle();
	});

	// Add and Remove active class on the btn

	$('.products .filters .all_filters .filter-list button').on('click', function () {
		$(this).addClass('active').parent().siblings().find('button').removeClass('active');
	});
	// $('select').niceSelect('destroy');
});

// setUp Variables And set a Default value

let cateFilter = 'all';
let brandFilter = 'all';
let priceFilter = 0;
let priceEndFilter = 100000;
let sizeFilter = 'all';

// Filter Function

productsFilter = () => {
	$('.loading-overlay').fadeIn();
    setTimeout(() => {
        $('.loading-overlay').fadeOut();
	let filteredPro = products.filter((item) => {
		return (
			item.category.find((e) => e == cateFilter) &&
			item.brand.find((i) => i == brandFilter) &&
			item.size.find((i) => i == sizeFilter) &&
			item.price > priceFilter &&
			item.price < priceEndFilter
		);
	});
	if (filteredPro.length === 0) {
		productsDom.innerHTML =
			'<p class="mt-4" style="font-size: 24px">There are no products with this specification</p>';
	} else {
		listProductUI(filteredPro, 'col-lg-4');
		}
	}, 2000);
};

// Get Filter Value On Click on a Filter Btn And Call Filter Function

$('.all_filters #cate-list li button').click(function () {
	cateFilter = $(this).attr('data-category-filter');
	productsFilter();
});
$('.all_filters #brand-list li button').click(function () {
	brandFilter = $(this).attr('data-brand-filter');
	productsFilter();
});
$('.all_filters #size-list li button').click(function () {
	sizeFilter = $(this).attr('data-size-filter');
	productsFilter();
});
$('.all_filters #price-list li button').click(function () {
	priceFilter = $(this).attr('data-price-filter');
	priceEndFilter = $(this).attr('data-price-filter-end');
	productsFilter();
});

let searchbtn = document.querySelector('.product-search');
let searInput = document.querySelector('#searInput');

// Search About Products Function

let Search = (e) => {
	e.preventDefault();
	console.log(searInput.value);
	if (searInput.value != '') {
		localStorage.setItem('searchKey', JSON.stringify(searInput.value));
		window.location.assign('shop.html');
	}
};

searchbtn.addEventListener('submit', Search);

// Run The Search Function

if (localStorage.getItem('searchKey')) {
	searchKey = JSON.parse(localStorage.getItem('searchKey'));
	let searchProducts = products.filter((item) => {
		return item.title.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;
	});
	console.log(searchProducts);
	listProductUI(searchProducts, 'col-lg-4');
	localStorage.setItem('searchKey', '');
} else {
	listProductUI(products, 'col-lg-4');
}
