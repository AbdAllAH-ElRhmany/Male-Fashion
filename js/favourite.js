// Drow Product UI At favouritePro Section At Favourite Page

// setUp Variables

let favouriteProDom = document.querySelector('.favouritePro .col-lg-8.col-12');

favProductUI = (productsInFav) => {
	if (
		JSON.parse(localStorage.getItem('productsInFav')) &&
		JSON.parse(localStorage.getItem('productsInFav')).length != 0
	) {
		let productUI = productsInFav.map((item) => {
			return `
            <div class="favouriteItem mt-4 d-flex justify-content-between align-items-center">
                <div class="favouriteItem-info"><a href="product.html" onclick="setProductId(${item.id})">
                    <div class="favouriteItem-img"><img src="${item.image[0]}" alt=""></div>
                    <div class="favouriteItem-text">
                        <h5 class="favouriteItem-text-title">${item.title}</h5>
                        <h6 class="favouriteItem-text-price">$${item.price}</h6>
                        <div class="rating" id='rating'>
                        <i class="fas ${item.rate > 0 ? 'active' : ''} fa-star"></i>
                        <i class="fas ${item.rate > 1 ? 'active' : ''}  fa-star"></i>
                        <i class="fas ${item.rate > 2 ? 'active' : ''}  fa-star"></i>
                        <i class="fas ${item.rate > 3 ? 'active' : ''} fa-star"></i>
                        <i class="fas ${item.rate > 4 ? 'active' : ''} fa-star"></i>
                        </div><!-- ./rating -->
                    </div><!-- ./favouriteItem-text -->
					</a>
                </div><!-- ./favouriteItem-info -->
                <div class="favouriteItem-btn"><button onclick="delFromFav(${
					item.id
				})">Remove from Favourites</button></div>
            </div><!-- ./favouriteItem -->
            `;
		});
		favouriteProDom.innerHTML = productUI.join('');
	} else {
		favouriteProDom.innerHTML = '<p class="mt-4" style="font-size: 30px">No Products At Favourites</p>';
	}
};
favProductUI(favProducts);

// Delete Product From Favourite List

delFromFav = (id) => {
	favProducts = favProducts.filter((item) => item.id !== id);
	products = products.map((i) => {
		if (i.id === id) {
			i.liked = '';
		}
		return i;
	});
	localStorage.setItem('products', JSON.stringify(products));
	localStorage.setItem('productsInFav', JSON.stringify(favProducts));
	favProductUI(favProducts);
};
