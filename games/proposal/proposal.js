$(document).ready(function(){

	// console.log(button_h, button_w);
	$('#no').click(function(){
		$('#whoosh')[0].play();
		var h = $('#image').height();
		var w = $('#image').width();
		var button_h = $('#yes').height();
		var button_w = $('#yes').width();
		var x = Math.random()*(0.8*(w-button_w/2));
		var y = Math.random()*(0.8*(h-button_h/2));
		
		var next_top = y.toString()+ 'px';
		var next_left = x.toString()+ 'px';
		

		// Animate only works when you specify top, left in css
		$(this).animate({left: next_left, top: next_top});
	});
	
	$('#yes').click(function() {
		$('#bell')[0].play();
		$('.wrapper').fadeOut('slow', function(){
			$('#applause')[0].play();
			$('.wrapper').empty();
			$('.wrapper').append("<img class='img-responsive'src='final_picture.jpg'/>");
			$('.wrapper').fadeIn('slow');
		});
	});
});


// Must add css position in order to animate left/right/up/down