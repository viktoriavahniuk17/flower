const btnFilter = document.querySelector('.catalog__content-filter-btn'),
	filterList = document.querySelector('.catalog__content-filter-list'),
	openBasketIcon = document.querySelector('.nav__search-group-icons-brack-svg'),
	basket = document.querySelector('.basket'),
	basketClose = document.querySelector('.basket-close')

var productDate = [
		{
			name: '101 червона троянда',
			url: 'img/catalog1.jpg',
			price: '2280 грн',
			data: 'flow1',
			dataproduct: 1,
		},
		{
			name: '25 рожевих півонієподібних троянд',
			url: 'img/catalog2.jpg',
			price: '1680 грн',
			data: 'flow2',
			dataproduct: 2,
		},
		{
			name: 'Закоханість',
			url: 'img/catalog3.jpg',
			price: '1270 грн',
			data: 'flow3',
			dataproduct: 3,
		},
		{
			name: 'Мрійниця',
			url: 'img/catalog4.jpg',
			price: '2280 грн',
			data: 'flow4',
			dataproduct: 4,
		},
		{
			name: 'Кошик сонячного настрою',
			url: 'img/catalog5.jpg',
			price: '1680 грн',
			data: 'flow5',
			dataproduct: 5,
		},
		{
			name: 'Квіткова клумба',
			url: 'img/catalog6.jpg',
			price: '1270 грн',
			data: 'flow6',
			dataproduct: 6,
		},
		{
			name: '101 червона троянда',
			url: 'img/catalog1.jpg',
			price: '2280 грн',
			data: 'flow1',
			dataproduct: 7,
		},
		{
			name: '25 рожевих півонієподібних троянд',
			url: 'img/catalog2.jpg',
			price: '1680 грн',
			data: 'flow2',
			dataproduct: 8,
		},
		{
			name: 'Закоханість',
			url: 'img/catalog3.jpg',
			price: '1270 грн',
			data: 'flow3',
			dataproduct: 9,
		},
		{
			name: 'Мрійниця',
			url: 'img/catalog4.jpg',
			price: '2280 грн',
			data: 'flow4',
			dataproduct: 10,
		},
		{
			name: 'Кошик сонячного настрою',
			url: 'img/catalog5.jpg',
			price: '1680 грн',
			data: 'flow5',
			dataproduct: 11,
		},
		{
			name: 'Квіткова клумба',
			url: 'img/catalog6.jpg',
			price: '1270 грн',
			data: 'flow6',
			dataproduct: 12,
		},
	],
	productCart = document.querySelector('.catalog__content-cart')
btnFilter.addEventListener('click', () => {
	filterList.classList.toggle('catalog__content-filter-list--active')
	btnFilter.classList.toggle('catalog__content-filter-btn--active')
})

let slice = productDate.slice(0, 12)

let products = productDate.map(function (item) {
	productCart.innerHTML += `
	<div class='catalog__content-cart-item' data-flow="${item.data}" data-product-id="${item.dataproduct}">
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

const filter = document.querySelector('.catalog__content-filter-list')
filter.addEventListener('change', function () {
	document.querySelectorAll('.catalog__content-cart-item').forEach(
		function (n) {
			n.classList.toggle(
				'hidden',
				this.length && !this.includes(n.dataset.flow)
			)
		},
		Array.from(this.querySelectorAll(':checked'), n => n.dataset.id)
	)
})

filter.dispatchEvent(new Event('change'))

function basketActiveDisable(show, hidden) {
	show.addEventListener('click', () => {
		basket.classList.add('basket--show')
	})
	hidden.addEventListener('click', () => {
		basket.classList.remove('basket--show')
	})
}
basketActiveDisable(openBasketIcon, basketClose)

let allButtonCard = document.querySelectorAll('.catalog__content-cart-btn')
let itemCount = document.querySelector('.nav__search-group-icons-brack-price')
let count = 0

function countCards() {
	count++
	itemCount.textContent = count
}

let removeItem = function () {
	count = Math.max(0, count - 1)
	itemCount.textContent = count
}

allButtonCard.forEach(button => {
	button.addEventListener('click', () => {
		click = true
		if ((click = true && click < 2)) {
			countCards()
		}
		let productsItem = button.closest('.catalog__content-cart-item')
		let productData = productsItem.dataset.productId
		let productName = productsItem.querySelector(
			'.catalog__content-cart-group-title'
		).innerHTML
		let productPrice = productsItem.querySelector(
			'.catalog__content-cart-group-price'
		).innerHTML
		let imgLink = productsItem.querySelector('.catalog__content-cart-img').src
		let cardItemList = document.querySelector('.basket__list')
		let exCardItem = document.querySelector(
			`li[data-product-id="${productData}"]`
		)

		if (exCardItem) {
			let countItem = exCardItem.querySelector('.count')
			countItem.innerHTML = parseInt(countItem.innerHTML) + 1
		} else {
			let cardItem = document.createElement('li')
			cardItem.dataset.productId = productData
			cardItem.innerHTML = `<img src="${imgLink}" class="img__basket">
				<div class="basket-content">
				<h6 class="basket__title">${productName}</h6>
				<p class="basket__price">${productPrice}</p>
				<span class="count">1</span>
				<button class="remove"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button>
				</div>`

			cardItemList.appendChild(cardItem)

			let btnRemove = document.querySelectorAll('.remove')
			btnRemove.forEach(button => {
				button.addEventListener('click', () => {
					let cardItem = button.closest('li')
					cardItemList.removeChild(cardItem)
					removeItem()
					count = 0
				})
			})
		}
	})
})
