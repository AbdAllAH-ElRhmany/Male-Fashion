// Drow Product UI At Products Sections At Home Page And Shop Page

// setUp Variables

let productsDom = document.querySelector('.products .row.content');

// Drow Product UI At Products Sections Function

let listProductUI = function (products = [], col = 'col-lg-3') {
	let productUI = products.map((item) => {
		return `
		<div class="product mix ${item.type.join(' ')}  ${col} col-sm-6 col-12">
			<div class="product-img">
			<a href="product.html" onclick="setProductId(${item.id})">
				<img src="${item.image[0]}" alt="product"></a>
				<div class="case case-${item.case} style="display: ${item.case ? 'block' : 'none'}">${item.case ? item.case : ''}</div>

				<div class="like mark${item.id}" onclick="addToFav(${item.id})"><img src="${
			item.liked === 'y' ? 'images/Icons/redHeart.png' : 'images/Icons/heart.png'
		}"alt=""  />
				</div>
				
			</div><!-- ./product-img -->
			<div class="addToCart" onclick="addToCart(${item.id})">+ add to cart</div>
			<h3 class="product-title">${item.title}</h3>
			<div class="rating" id='rating'>
			<i class="fas ${item.rate > 0 ? 'active' : ''} fa-star"></i>
			<i class="fas ${item.rate > 1 ? 'active' : ''}  fa-star"></i>
			<i class="fas ${item.rate > 2 ? 'active' : ''}  fa-star"></i>
			<i class="fas ${item.rate > 3 ? 'active' : ''} fa-star"></i>
			<i class="fas ${item.rate > 4 ? 'active' : ''} fa-star"></i>
				
			</div><!-- ./rating -->
			<h5 class="product-price">$${item.price}</h5>
		</div><!-- ./product -->`;
	});
	productsDom.innerHTML = productUI.join('');
};
listProductUI(JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : Data);
