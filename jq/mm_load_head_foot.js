// v20180128
$(function() {

$('body').prepend('<header class="mm_v2018"></header>').append('<footer class="mm_v2018"></footer>');

$('header.mm_v2018').load("mm_head_02.html", function() {
var this_header = $('header.mm_v2018');
	
	//$(window).on("load resize scroll" , function() {
		

		
		
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
		//$('html, body').stop(true).animate({scrollTop: $(this.hash).offset().top }, 1000, 'swing');	
			

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


	
	//setTimeout(function(){ scroll(0, 0); }, 1);
	if (window.location.hash) scroll(0, 0);	
	if (window.location.hash) {
		$('html, body').stop(true).animate({scrollTop: $(window.location.hash).offset().top + 'px'}, 1000, 'swing');
	}

/*
var jq_hw_num_a = $('.jq_hw_num_a > div').length;
this_header.find('.add_num_style_trend_list').append('<span>' + jq_hw_num_a + '</span>');
    
var jq_hw_num_b = $('.jq_hw_num_b > div').length;
this_header.find('.add_num_style_hotsopt').append('<span>' + jq_hw_num_b + '</span>');
	
var jq_hw_num_c = $('.jq_hw_num_c > div').length;
this_header.find('.add_num_corporate_image').append('<span>' + jq_hw_num_c + '</span>');
*/

});		

$('footer.mm_v2018').load('mm_foot_02.html');
});