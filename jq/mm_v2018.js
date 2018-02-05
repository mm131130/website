$(function(){
	
/*
$('.nav_menu').each(function(){
	$(this).find('a').on('click', function(){
	var goto_top = $($(this).attr('href')).offset().top;
	$('html, body').stop(true).animate({ scrollTop:goto_top },600);

	return false;
	});
});
*/	

/*

  */     
  
 	if ( window.location.hash ) scroll(0, 0);
	setTimeout(function() { scroll(0, 0); }, 1); 
	 
	if ( window.location.hash ) {
		$('html, body').animate({scrollTop: $(window.location.hash).offset().top + 'px'}, 1000);
	}
	
	$('.nav_menu a').on('click', function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top + 'px'}, 1000);
	});


$(window).on('load resize scroll', function() {
	if ($(window).width() >= 768) {
		//$('body').css({background:'red'});
		
		$('.nav_menu > li').css('display', '');	
		$('.nav_menu > li > ul').css('display', '');	
		
	}else if($(window).width() <= 767){
		//$('body').css({background:'#fbf8f3'});
		
	
 

$('.nav_menu').each(function(){
	var ts = $(this);
	ts.find('.mobile_btn').on('click' , function(){
		if($(this).hasClass('open')){
			ts.find('*').removeClass('open');
			ts.find('> li , ul').slideUp();
		}else{
			$(this).addClass('open');
			ts.find('> li').slideDown();
		}
	});
	
	ts.find('> li:not(".mobile_btn") > a').on('click' , function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').next().slideUp();			
		}else{
			$(this).addClass('open').next().slideDown();	
		}
	});	
	
	ts.find('ul a').on('click' , function(){
		ts.find('*').removeClass('open');
		ts.find('> li:not(".mobile_btn") , li ul').slideUp();
		
		//$('html, body').animate({scrollTop: $(this.hash).offset().top + 'px'}, 1000);
	});

});<!-- end -->
	
		
		
		
		

	}


	
	

 }); 
 });