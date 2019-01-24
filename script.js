$(document).ready(function() {
	$(window).scroll(function() {
		if($(window).scrollTop()==0){
			$('.up-page').hide();
		}
		else {
			$('.up-page').show();
		}
	});
	$('.up-page button').click(function() {
		$(window).scrollTop(0,0);
	});
});