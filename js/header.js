// PreLoader
$('.sk-cube-grid').fadeOut(4000, function () {
	$('.preloader-bg').fadeOut(2000, function () {});
});

// Small Devices nav Control
$(document).ready(function () {
	$('.small-nav-icon').click(function () {
		openOverlay();
		$('.side-nav').animate({ left: '0px', opacity: '1' }, 500);
		$('.side-nav').css({ visibility: 'visible' });
	});

	$('.overlay').click(closeOverlay);

	$('.searchIcon').click(function () {
		openOverlay2();
		$('.search-form').fadeIn();
	});

	$('.closeIcon').click(closeIcon);
});

//Add Product To CartDom And Cart page

// setUp Variables

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : Data;
let cartMenu = document.querySelector('.shoppingMenu');
let cartPriceDom = document.querySelector('#cart-price');
let smcartPriceDom = document.querySelector('#sm-cart-price');
let addItems = JSON.parse(localStorage.getItem('productsInCart'))
	? JSON.parse(localStorage.getItem('productsInCart'))
	: [];
let cartPrice = JSON.parse(localStorage.getItem('cartPrice')) ? JSON.parse(localStorage.getItem('cartPrice')) : 0.0;

// Add To Cart Function

function addToCart(id) {
	localStorage.setItem('products', JSON.stringify(products));
	// check wheather user loged in or not
	if (localStorage.getItem('user')) {
		let selectedItem = products.find((item) => {
			return item.id === id;
		});
		let itemInCart = addItems.some((i) => i.id === selectedItem.id);
		// check wheather the product already in cart
		if (itemInCart) {
			addItems = addItems.map((i) => {
				if (i.id === selectedItem.id) {
					i.qty++;
					productTotalPrice = i.qty * i.price;
					i.productTotalPriceCart = productTotalPrice;
				}
				return i;
			});
		} else {
			addItems = [...addItems, selectedItem];
			selectedItem.qty = 1;
			selectedItem.productTotalPriceCart = selectedItem.price;
		}
		// set Product to display it after reload and to sent it to Cart page
		localStorage.setItem('productsInCart', JSON.stringify(addItems));
		cartPrice += selectedItem.price;
		localStorage.setItem('cartPrice', cartPrice);
		cartMenu.innerHTML = `<p></p>
		<a href="cart.html" class="shop-btn">view all products</a>`;
		addItems.forEach((i) => {
			cartMenu.innerHTML += `<p>${i.title}<span>${i.qty}</span></p> `;
		});
		cartPriceDom.innerHTML = `$${cartPrice}`;
		smcartPriceDom.innerHTML = `$${cartPrice}`;
		console.log(selectedItem);
	} else {
		// if the user doesn't loged in
		$('.massage').fadeIn();
		$('.massage p').text('Please Login First');
	}
}

// to display Products in the cartDom after reload

if (addItems) {
	addItems.forEach((i) => {
		localStorage.setItem('cartPrice', cartPrice);
		cartMenu.innerHTML += `<p>${i.title}<span>${i.qty}</span></p> `;
	});
	cartPriceDom.innerHTML = `$${cartPrice}`;
	smcartPriceDom.innerHTML = `$${cartPrice}`;
}

// to open cartDom onclick

$('.shoppingCart').click(function () {
	if ($('.shoppingMenu p').text() == '') {
		$('.shoppingMenu').removeClass('active');
		window.location.assign('cart.html');
	} else {
		$('.shoppingMenu').toggleClass('active');
	}
});

// Add Products To Fav

// setUp Variables

let favProducts = JSON.parse(localStorage.getItem('productsInFav'))
	? JSON.parse(localStorage.getItem('productsInFav'))
	: [];

// Add Products To Fav Function

addToFav = (id) => {
	let img = $('.mark' + id + '')
		.find('img')
		.attr('src');
	console.log();
	console.log(img);
	if (img.indexOf('red') == -1) {
		$('.mark' + id + '')
			.find('img')
			.attr('src', 'images/Icons/redHeart.png');
		products = products.map((item) => {
			if (item.id === id) {
				item.liked = 'y';
			}
			return item;
		});
		localStorage.setItem('products', JSON.stringify(products));
		favProducts = products.filter((i) => i.liked === 'y');
		localStorage.setItem('productsInFav', JSON.stringify(favProducts));
	} else {
		$('.mark' + id + '')
			.find('img')
			.attr('src', 'images/Icons/heart.png');
		products = products.map((item) => {
			if (item.id === id) {
				item.liked = 'n';
			}
			return item;
		});
		localStorage.setItem('products', JSON.stringify(products));
		favProducts = products.filter((i) => i.liked === 'y');
		localStorage.setItem('productsInFav', JSON.stringify(favProducts));
	}
};

// Search About Products

// setUp Variables

let searchBtn = document.querySelector('.search-form');
let searchInput = document.querySelector('#searchInput');

// Search About Products Function

let search = (e) => {
	e.preventDefault();
	if (searchInput.value != '') {
		localStorage.setItem('searchKey', JSON.stringify(searchInput.value));
		window.location.assign('shop.html');
	}
};

searchBtn.addEventListener('submit', search);

// Set Product ID To Secd It To productDetails Page

let setProductId = (id) => localStorage.setItem('ProductId', id);
