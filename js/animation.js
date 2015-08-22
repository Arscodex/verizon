$(document).ready(function(){
	var activeSlide = 1;
	console.log(activeSlide);
	$('#slide-one-button').click(function(){
		console.log('slide 1');
		if(activeSlide !== 1){
			$('#slide-two').fadeOut('slow');
			$('#slide-one').fadeIn('slow');
			activeSlide = 1;
		}
	});
	$('#slide-two-button').click(function(){
		console.log('slide 2');
		if(activeSlide !== 2){
			$('#slide-one').fadeOut('slow');
			$('#slide-two').fadeIn('slow');
			activeSlide = 2;
		}
	});
})