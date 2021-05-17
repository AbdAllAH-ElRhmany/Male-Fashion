// Product Dynamic Tabs Control
$('document').ready(function () {
	$('.tab-btn:first-of-type').addClass('active');
	$('.tab-content:first-of-type').fadeIn();
	$('.tab-btn').click(function () {
		let i = $(this).index();
		$('.tab-btn').removeClass('active');
		$('.tab-content').fadeOut();
		$(this).addClass('active');
		$('.tab-content').eq(i).fadeIn();
	});
});

// Get the Selected Product From LocalStorage And AllProducts

let productId = localStorage.getItem('ProductId');
let selectedPro = products.find((i) => i.id == productId);

// Get Product's Images From The SelectedProduct

let previewImgs = document.querySelectorAll('.product-preview .product-imgs li img');

previewImgs[0].src = selectedPro.image[0];
previewImgs[1].src = selectedPro.image[1];
previewImgs[2].src = selectedPro.image[2];
previewImgs[3].src = selectedPro.image[3];

let previewDom = document.querySelector('.product-preview .preview img');
previewDom.src = selectedPro.image[0];

// Drow Product UI At Details Section At productDetails Page

// setUp Variables

let productDom = document.querySelector('.details .col-lg-8');

let productUI = () => {
	let size = selectedPro.size.slice(1).map((item) => {
		return `<li> ${item} </li>`;
	});
	let cate = selectedPro.category.slice(1).map((item) => {
		return item;
	});
	let tags = selectedPro.tag.map((item) => {
		return item;
	});
	productDom.innerHTML = `
        <h3 class="product-title mb-3">${selectedPro.title}</h3>
        <div class="rating mb-3" id='rating'>
		<i class="fas ${selectedPro.rate > 0 ? 'active' : ''} fa-star"></i>
		<i class="fas ${selectedPro.rate > 1 ? 'active' : ''}  fa-star"></i>
		<i class="fas ${selectedPro.rate > 2 ? 'active' : ''}  fa-star"></i>
		<i class="fas ${selectedPro.rate > 3 ? 'active' : ''} fa-star"></i>
		<i class="fas ${selectedPro.rate > 4 ? 'active' : ''} fa-star"></i>
            <span> - 5 Reviews</span>
        </div><!-- ./rating -->
        <h3 class="product-price mb-3">$${selectedPro.price}</h3>
        <p class="product-desc mb-5">${selectedPro.desc}</p>
        <div class="size-content mb-4">
        Size:
        <ul class="size-list">
        
            ${size.join('')}
            </ul><!-- ./size-list -->
        </div><!-- ./size-content -->
        <div class="addToCart  mb-3" onclick="addToCart(${productId})">add to cart</div>


        <div class="like mark${productId}" onclick="addToFav(${productId})"><img src="${
		productId === 'y' ? 'images/Icons/redHeart.png' : 'images/Icons/heart.png'
	}"alt=""  /><a class="addToFav">add to wishlist</a></div>
        <p class="cate-content mb-3"><span class="cate">Categories: </span>${cate.join(', ', 1)}</p>
        <p class="cate-content"><span class="cate">Tag: </span>${tags.join(', ')}</p>
    `;
};
productUI();

// Choose Size

$('.size-list li').click(function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});
