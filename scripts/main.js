// http://data.fixer.io/api/latest
//     ? access_key = API_KEY
//     & base = USD
//     & symbols = GBP,JPY,EUR

$(function() {
	




	$('.header__burger').click(function(event) {
		event.preventDefault();

		$('.nav-block').toggleClass('nav__actived');
		$('.nav-element').toggleClass('nav-element__actived');
		$('.header__burger').toggleClass('header__burger__actived');


		if( $('.nav-block').hasClass('nav__actived') ) {
			let navTop =  $('.black-bar').outerHeight() + $('.header__mobile-upper').outerHeight();
			$('.nav__actived')[0].style.top = navTop + "px";
		}
		
	});


	$.get(
		'http://data.fixer.io/api/latest',
		
		{
			access_key: 'afbdceb14de20f5cf57afc7aa07f7ecb',
			symbols: 'RUB,USD'
		},

		function (data) {
			let eurRate = (data.rates.RUB).toFixed(6);
			let usdRate = (data.rates.RUB / data.rates.USD).toFixed(6);

			$('#USD-rate').text(usdRate + ' ₽');
			$('#EUR-rate').text(eurRate + ' ₽');
		}
	);

});

