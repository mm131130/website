$(function(){



$('body').prepend('<header class="mm_v2018"></header>').append('<footer class="mm_v2018"></footer>');

$('header.mm_v2018').load("../html_mm/mm_head_02.html");
$('footer.mm_v2018').load('../html_mm/mm_foot_02.html');




$('header.mm_v2018').each(function() {
    
var this_header = $('header.mm_v2018');
	
$(window).on('load resize', function() {
	if ($(window).width() >= 768) {
		this_header.find('.mm_nav > li').css('display', '');
		this_header.find('.mm_nav > li > ul').css('display', '');
	
	}else if ($(window).width() <= 767) {
		//	menu_open_close();
}
});//window

if ($(window).width() <= 767) {

	this_header.find('.mobile_btn').on('click' , function(){		
			if($(this).hasClass('open')){
				$(this).removeClass('open').siblings().slideUp();
				
			}else{
				$(this).addClass('open').siblings().slideDown();			
				
			}
		return false;
		});
		
	this_header.find('ul.mm_nav > li > a').on('click' , function(){
			
		if($(this).hasClass('open')){
			$(this).removeClass('open').next().slideUp();
				
		}else{
			this_header.find('.mm_nav ul').slideUp();
			this_header.find('.mm_nav a').removeClass('open');
			$(this).addClass('open').next('ul').slideDown();	
		}
	});
	this_header.find('.mm_nav ul a').on('click' , function(){
		this_header.find('.mm_nav > li:not(".mobile_btn") , .mm_nav ul').slideUp();
		this_header.find('*').removeClass('open');
	});
}

	this_header.find('.mm_nav a').on('click' , function(){
		$('html, body').stop(true).animate({scrollTop: $(this.hash).offset().top }, 1000, 'swing');	
	return false;
	});
	if (window.location.hash) scroll(0, 0);	
	if (window.location.hash) {
		$('html, body').stop(true).animate({scrollTop: $(window.location.hash).offset().top + 'px'}, 1000, 'swing');
	}
});		







});