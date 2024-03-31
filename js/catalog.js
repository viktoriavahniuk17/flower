const btnFilter = document.querySelector('.catalog__content-filter-btn'),
			filterList = document.querySelector('.catalog__content-filter-list')

var productDate = [
	{
		name: "101 червона троянда",
		url: "img/catalog1.jpg",
		price: "2280 грн"
	},
	{
		name: "25 рожевих півонієподібних троянд",
		url: "img/catalog2.jpg",
		price: "1680 грн"
	},
	{
		name: "Закоханість",
		url: "img/catalog3.jpg",
		price: "1270 грн"
	},
	{
		name: "Мрійниця",
		url: "img/catalog4.jpg",
		price: "2280 грн"
	},
	{
		name: "Кошик сонячного настрою",
		url: "img/catalog5.jpg",
		price: "1680 грн"
	},
	{
		name: "Квіткова клумба",
		url: "img/catalog6.jpg",
		price: "1270 грн"
	},
	{
		name: "101 червона троянда",
		url: "img/catalog1.jpg",
		price: "2280 грн"
	},
	{
		name: "25 рожевих півонієподібних троянд",
		url: "img/catalog2.jpg",
		price: "1680 грн"
	},
	{
		name: "Закоханість",
		url: "img/catalog3.jpg",
		price: "1270 грн"
	},
	{
		name: "Мрійниця",
		url: "img/catalog4.jpg",
		price: "2280 грн"
	},
	{
		name: "Кошик сонячного настрою",
		url: "img/catalog5.jpg",
		price: "1680 грн"
	},
	{
		name: "Квіткова клумба",
		url: "img/catalog6.jpg",
		price: "1270 грн"
	}
],
		productCart = document.querySelector('.catalog__content-cart')
btnFilter.addEventListener('click', ()=>{
	filterList.classList.toggle('catalog__content-filter-list--active')
	btnFilter.classList.toggle('catalog__content-filter-btn--active')
})

let slice = productDate.slice(0, 12)

	let products = productDate.map(function(item){
	productCart.innerHTML += `
	<div class='catalog__content-cart-item'>
								<img src='${item.url}' alt='' class='catalog__content-cart-img'>
								<div class='catalog__content-cart-item-group'>
									<h4 class='catalog__content-cart-group-title'>${item.name}</h4>
									<p class='catalog__content-cart-group-price'>${item.price}</p>
								</div>
								<button class='catalog__content-cart-btn'>Замовити</button>
								<a href='#' class='catalog__content-cart-link'>Швидке замовлення</a>
							</div>
	`
	})
