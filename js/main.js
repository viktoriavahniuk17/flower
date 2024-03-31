document.addEventListener('DOMContentLoaded', ()=>{
	const ads       = document.querySelector('.ads'),
			  adsClose  = document.querySelector('.bi-x-circle'),
				btnAccept = document.querySelector('.ads__footer-accept'),
				btnDeny   = document.querySelector('.ads__footer-deny')
	
	let times = setTimeout(function time(){
		ads.classList.add('ads--show')
		adsClose.addEventListener('click', ()=> ads.classList.remove('ads--show'))
		btnDeny.addEventListener('click', ()=> ads.classList.remove('ads--show'))
		btnAccept.addEventListener('click', ()=>{
			clearTimeout(timeId)
			ads.classList.remove('ads--show')
		})
		timeId = setTimeout(time, 10000)
	}, 1000)
})