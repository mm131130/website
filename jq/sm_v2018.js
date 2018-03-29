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













$('.jb_scroll_down').on('click' , function(){
	$('html, body').animate({scrollTop : $(this.hash).offset().top }, 210, 'swing');	
	return false;
});	
$('.jb_change_size').on('click' , function(){
		
	if($(this).hasClass('change')){
		$(this).removeClass('change');
		$('.jf_change_size > div ').removeClass().addClass('wm_33');
			
	}else{
		$(this).addClass('change');
		$('.jf_change_size > div ').removeClass().addClass('h_100vh flex_box mw_360');
	}
	return false;
	});	
	
	
$('.sm_ddm').each(function() {
	var ts = $(this);
	ts.find('.sm_ddm_btn').on('click', function(){
		if(ts.hasClass('open')){
			ts.removeClass('open').find('.sm_ddm_menu').hide();
		}else{
			ts.addClass('open').find('.sm_ddm_menu').show();		
		}
		return false;
	});
	
	ts.find('.sm_ddm_menu a').on('click', function(){
		var th_text = $(this).html();
		ts.find('.btn_info').html(th_text).css({color:'#170003'});
		ts.removeClass('open').find('.sm_ddm_menu').hide();	
		return false;
	});
});//sm_ddm - drop down menu



$('.sm_radio_box , .sm_check_box').on('click', function() {
	var ts = $(this);
	
	if(ts.hasClass('click_item')){
		ts.removeClass('click_item').find('.btn_img').removeClass('click_icon');		
	}else{
		ts.addClass('click_item').find('.btn_img').addClass('click_icon');	
	}
	if(ts.hasClass('sm_radio_box')){
		ts.siblings().removeClass('click_item').find('.btn_img').removeClass('click_icon');	
	}
	return false;
});//radio_box and check_box



/*

$('.b_my_wish').on('click', function() {
	var ts = $(this);
	
	if(ts.hasClass('click_icon')){
		ts.removeClass('click_icon');		
	}else{
		ts.addClass('click_icon');	
	}
	return false;
});
*/

$('.sm_nav.v2').each(function() {
		var sm_nav_v2 = $('.sm_nav.v2');
		sm_nav_v2.find('.b_login_register').on('click', function(){
			$(this).hide().siblings().show();
		});
		
		sm_nav_v2.find('.fb_sign_out').on('click', function(){
			sm_nav_v2.find(' > *').css('display', '');
		});
});







});