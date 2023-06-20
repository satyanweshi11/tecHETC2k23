window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.getElementById('hamburger');
	const mobile_menu = document.getElementById('mobile-nav');

	hamburger.onclick = function(){
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	}

	 document.onclick =function(clickEvent){
	 	if( clickEvent.target.id == 'a' && clickEvent.target.id !== 'hamburger'){
			menu_btn.classList.remove('is-active');
	 		mobile_menu.classList.remove('is-active');
		
 }

	 }
	}