// Drow Product UI Title And Prices At check-total Section At Check Out Page

// setUp Variables

let checkDom = document.querySelector('.check-total .order-menu ');
let totalDom = document.querySelector('#cartTotal ');
let productsInCart = JSON.parse(localStorage.getItem('productsInCart'));

// Drow Product UI Title And Prices Function

let listProducts = (pro) => {
	if (
		JSON.parse(localStorage.getItem('productsInCart')) &&
		JSON.parse(localStorage.getItem('productsInCart')).length != 0
	) {
		let proItem = pro.map((item) => {
			return `
            <div class="order-item">
                <p class="title">${item.title}</p>
                <p class="total">$${item.productTotalPriceCart}</p>
                <div class="clear"></div>
            </div><!-- ./order-item -->
            `;
		});
		checkDom.innerHTML += proItem.join('');
	} else {
		checkDom.innerHTML = '<p class="mt-4" style="font-size: 20px">Shopping First</p>';
	}
};

listProducts(productsInCart);

totalDom.innerHTML = `$${localStorage.getItem('cartPrice')}`;
