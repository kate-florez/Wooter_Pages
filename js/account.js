$( document ).ready(function() {

	$( ".at1" ).click(function() {

		$('.at1').addClass('activated');
		$('.at2, .at3, .at4').removeClass('activated');

		$('.tab_1').removeClass('hide');
		$('.tab_2, .tab_3, .tab_4').addClass('hide');
	});

	$( ".at2" ).click(function() {

		$('.at2').addClass('activated');
		$('.at1, .at3, .at4').removeClass('activated');

		$('.tab_2').removeClass('hide');
		$('.tab_1, .tab_3, .tab_4').addClass('hide');
	});

	$( ".at3" ).click(function() {

		$('.at3').addClass('activated');
		$('.at2, .at1, .at4').removeClass('activated');

		$('.tab_3').removeClass('hide');
		$('.tab_2, .tab_1, .tab_4').addClass('hide');
	});

	$( ".at4" ).click(function() {

		$('.at4').addClass('activated');
		$('.at2, .at3, .at1').removeClass('activated');

		$('.tab_4').removeClass('hide');
		$('.tab_2, .tab_3, .tab_1').addClass('hide');
	});

});
