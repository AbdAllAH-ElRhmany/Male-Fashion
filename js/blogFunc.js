// Drow Product UI At Blog Sections At Home Page And Blog Page

// setUp Variables

let blogDom = document.querySelector('.blog .container .row');

// Drow Product UI At Blog Sections Function

let drowBlogProUI = (blogData, num = 9) => {
	let selectedProducts = blogData.filter((item) => item.id <= num);
	let blogPro = selectedProducts.map((item) => {
		return `
        <div class="col-lg-4 col-sm-6 mb-5 col-12">
            <div class="blog-item">
                <div class="blog-1 blog-img" style="background-image : url(${item.image})"></div>
                <div class="blog-item-text">
                    <span class="date"><img src="images/Icons/calendar.png" alt="calendar">${item.date}</span>
                    <h5>${item.title}</h5>
                    <a href="#" class="border-hover">read more</a>
                </div><!-- ./blog-item-text -->
            </div><!-- ./blog-item -->
        </div>
        `;
	});
	blogDom.innerHTML += blogPro.join('');
};
