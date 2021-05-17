// Drow Product UI At CartList Section At Cart Page

// setUp Variables

let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));

let cartProductsDom = document.querySelector('.cartList tbody');

// Drow Product UI At CartList Section Function

let listCartProductUI = function (productsInCart = []) {
	if (
		JSON.parse(localStorage.getItem('productsInCart')) &&
		JSON.parse(localStorage.getItem('productsInCart')).length != 0
	) {
		let cartProductUI = productsInCart.map((item) => {
			return `
			<tr>
			<td class="cart-item"><a href="product.html" class="d-lg-flex" onclick="setProductId(${item.id})">
			<div class="cart-item-pic"><img src="${item.image[0]}" alt=""></div>
			<div class="cart-item-text">
			<h6 class="cart-item-title mb-2">${item.title}</h6>
			<h6 class="cart-item-price">$${item.price}</h6>
			</div><!-- ./cart-item-text --></a>
			</td><!-- ./cart-item -->
			<td class="item-qty">
			<div class="item-qty-content">
			<span class="less" onclick="qtyControl('less', (${item.id}))">-</span>
			<input type="text" id="item-qty${item.id}" disabled value="${item.qty}">
			<span class="more" onclick="qtyControl('more', (${item.id}))">+</span>
			</div><!-- ./item-qty-content -->
			</td><!-- ./item-qty -->
			<td class="item-price">
			<h6 id="productTotalPrice${item.id}">$${item.qty * item.price}</h6>
			</td>
			<td class="del-item" onclick="deleteItem(${item.id})">
			<i class="fas fa-times"></i>
			</td>
			</tr>
			`;
		});
		cartProductsDom.innerHTML = cartProductUI.join('');
		document.querySelector('#cartTotal').innerHTML = `$${cartPrice}`;
	} else {
		cartProductsDom.innerHTML = '<p class="mt-4" style="font-size: 30px">Shopping First</p>';
		document.querySelector('#cartTotal').innerHTML = `$${cartPrice}`;
		localStorage.setItem('cartPrice', 0);
	}
};
listCartProductUI(productsInCart);

// Control The Quantity Of The Product (Less, More)

function qtyControl(opr, id) {
	if (JSON.parse(localStorage.getItem('productsInCart'))) {
		myProduct = productsInCart.find((i) => i.id == id);
		let qtyEle = document.querySelector('#item-qty' + id + '');
		let qty = document.querySelector('#item-qty' + id + '').value;
		let productTotalPrice = 0;
		let productTotalPriceDom = document.querySelector('#productTotalPrice' + id + '');

		// Reduce Product Quantity

		if (opr === 'less') {
			if (qty > 1) {
				qty--;
				qtyEle.value = qty;
				productsInCart = productsInCart.map((i) => {
					if (i.id === id) {
						i.qty = qty;
						productTotalPrice = i.qty * i.price;
						i.productTotalPriceCart = productTotalPrice;
					}
					return i;
				});
				localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
			}
		}

		// Increase Product Quantity

		if (opr === 'more') {
			let qtyEle = document.querySelector('#item-qty' + id + '');
			let qty = document.querySelector('#item-qty' + id + '').value;
			qty++;
			qtyEle.value = qty;
			productsInCart = productsInCart.map((i) => {
				if (i.id === id) {
					i.qty = qty;
					productTotalPrice = i.qty * i.price;
					i.productTotalPriceCart = productTotalPrice;
				}
				return i;
			});
			localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
		}

		productTotalPriceDom.innerHTML = `$${myProduct.qty * myProduct.price}`;
		updateDom();
	}
}

// Function updateDom to Update Product Quantity And Prices After Less, More And Delete Product

function updateDom() {
	cartPrice = 0;
	cartMenu.innerHTML = `<p></p>
	<a href="cart.html" class="shop-btn">view all products</a>
	${productsInCart
		.map((i) => {
			cartPrice += i.productTotalPriceCart;
			localStorage.setItem('cartPrice', cartPrice);
			return `<p>${i.title}<span>${i.qty}</span></p>`;
		})
		.join('')}
	`;
	cartPriceDom.innerHTML = `$${cartPrice}`;
	smcartPriceDom.innerHTML = `$${cartPrice}`;
	document.querySelector('#cartTotal').innerHTML = `$${cartPrice}`;
}

// Delete Product From Cart

function deleteItem(id) {
	productsInCart = productsInCart.filter((item) => {
		if (item.id === id) {
			item.productTotalPriceCart = '';
		}
		return item.id !== id;
	});
	localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
	listCartProductUI(productsInCart);
	updateDom();
}
