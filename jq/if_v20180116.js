// all_v2018016
// MM - Mountain - Chiou Wen Shan
// dd 20170811



$(function(){


// slide_show
// hearder
// footer

// page_home
// page_product

/* Sign in & Register */
/* mockup 07 */
/* mockup 06 */
/* mockup 03 */
/* mockup 02 */
/* mockup 01 */


// btn + -
// btn mywish


$('.box_this_page , .iphon5_size_out , .mobile_size , .just_one_page').each(function() {
	var ts = $(this),
	dot_btn_html = '',
	now_pics_num = 0,
	how_many_pics = ts.find('.page_box .page').length;
	

	ts.find('.page_box .page').each(function (i) {
		var btn_text = (i+1);
		dot_btn_html += '<a href="#">&nbsp;</a>';
		
	});

	ts.find('.dot_box').html(dot_btn_html);
		
	ts.find('.dot_box').on('click', 'a', function () {
		goToSlide($(this).index());
		return false;
	});
	
	ts.find('.btn_L_R').animate({left:'-15px'},180);	
	ts.find('.btn_R_R').animate({right:'-15px'},180);
	
	ts.find('.btn_L , .btn_R').on('click', function () {
		if($(this).hasClass('btn_L')){
			goToSlide(now_pics_num-1);			
		}else{
			goToSlide(now_pics_num+1);	
		}
		return false;		
	});
	
	
	
	function goToSlide(index) {
		now_pics_num = index;
		changeIcon();
		ts.find('.page_box').stop(true).animate({ marginLeft: - 100 * index + '%' }, 500);
		ts.find('.page_box.h').stop(true).animate({ top: - 100 * index + '%' }, 500);

		ts.find('.products_list').stop(true).animate({marginLeft : -100 * index +'%'},270);	
		ts.find('.page_num').html( '<span>' + ( now_pics_num + 1) + '</span><span>' + how_many_pics + '</span>');	
		}
		
		
	function changeIcon(){
		if(now_pics_num === 0){
			ts.find('.btn_L').hide();
		}else{
			ts.find('.btn_L').show();
		}
		if(now_pics_num === how_many_pics-1){
			ts.find('.btn_R').hide();	
		}else{
			ts.find('.btn_R').show();	
		}
		ts.find('.dot_box a').removeClass('click_now').eq(now_pics_num).addClass('click_now');
	}	
	
	if(ts.hasClass('page_product')){
		goToSlide(2);
	    	
		}else{
		goToSlide(now_pics_num);	
	}

		

});<!-- slide show -->

});<!-- end function -->


$(function(){

// header.v01

$('header.v01').each(function() {
	var ts = $(this);
	
	ts.find('.info_btn').on('click', function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open').find('.offer_info').slideUp(180);	
	}else{
		$(this).addClass('open').find('.offer_info').slideDown(210);			
	}
	return false;	
	});


	ts.find('.btn_X.v2').on('click', function(){
	ts.find('.event_info_B').animate({right:'-100%'},180);
	return false;	
	});
	

if( $(window).width() <= 1023){
	
	ts.find('.three_line').on('click', function(){
	
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		
	ts.find('.nav_menu *').removeClass('open');
	ts.find('.nav_menu').slideUp(180);		
	ts.find('.nav_menu ul').slideUp(180);
		//ts.find('> li a').removeClass('open');
		//ts.find('ul').slideUp();
	}else{
		$(this).addClass('open').next().slideDown(210);
	}
	return false;
	});


	ts.find('.nav_menu > li > a').on('click', function(){
		
	if($(this).hasClass('open')){
		$(this).removeClass('open').next().slideUp(180);
	}else{
		ts.find('.nav_menu *').removeClass('open');
		ts.find('.nav_menu ul').slideUp(180);
		$(this).addClass('open').next().slideDown(210);
	}
	return false;		
	});	

	ts.find('.nav_menu ul li a').on('click', function(){
		ts.find('.nav_menu *').removeClass('open');	
		ts.find('.nav_menu ul').slideUp(180);

		return false;		
	});<!-- nav_menu -->
}
});<!-- header_v01 -->


// footer.v01

$('footer.v01').each(function() {
	var ts = $(this);
	
	ts.find('.b_use_info').on('click', function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		ts.find('.btn_box_B').slideUp(180);	
	}else{
		$(this).addClass('open');
		ts.find('.btn_box_B').slideDown(210);			
	}
	return false;	
	});

})

});<!-- end function -->





$(function(){

// page_home
$('.page_home').each(function() {

var ts = $(this);

function random_num(){
	random_num_A = Math.floor((Math.random()*2) );
}

random_num();
if (random_num_A == 0 ){
	ts.find('.coin_icon').css({left:'33.333333%'});	
	ts.find('.coin_box').css({left:'33.333333%'});
	ts.find('.coin_add_info').css({left:'33.333333%'});		
}else if(random_num_A == 1 ){
	ts.find('.coin_icon').css({left:'66.666666%'});		
	ts.find('.coin_box').css({left:'66.666666%'});
	ts.find('.coin_add_info').css({left:'66.666666%'});	
}

ts.find('.coin_box').delay(300).animate({bottom:'108px'},210).animate({bottom:'72px'},240);
ts.find('.coin_icon').animate({bottom:'280px'},300).animate({bottom:'240px'},240);

var coin_up_down = 0;

ts.find('.coin_icon').on('click', function(){
	if( coin_up_down === 0 ){	
	$(this).animate({bottom:'210px'},360).animate({bottom:'330px'},120).animate({bottom:'-1200px'},240);
	ts.find('.coin_box').delay(450).animate({bottom:'117px'},150).animate({bottom:'-1200px'},240);	
	ts.find('.coin_add_info').delay(740).animate({bottom:'120px'},150).animate({bottom:'72px'},240).delay(3000).animate({bottom:'-1200px'},240);	
		
	}else if ( coin_up_down === 1 ){
	$(this).animate({bottom:'36px'},360).animate({bottom:'156px'},120).animate({bottom:'-1200px'},240);
	ts.find('.coin_add_info').delay(600).animate({bottom:'120px'},150).animate({bottom:'72px'},240).delay(3000).animate({bottom:'-1200px'},240);
	}
	return false;	
});		

ts.find('.coin_box .btn_X').on('click', function(){
	coin_up_down += 1;
	ts.find('.coin_box').animate({bottom:'108px'},140).animate({bottom:'-1200px'},240);
	ts.find('.coin_icon').delay(210).animate({bottom:'36px'},150).animate({bottom:'240px'},180).animate({bottom:'66px'},150);
	return false;
});
		

		
ts.find('.btn_box_A').each(function(){
	
	$(this).find('.b_shopping_bag').on('click', function(){
	if ($(this).hasClass('opne')){
		ts.find('.bag_box').slideUp();
		$(this).removeClass('opne');
	}else{
		$(this).addClass('opne');
		ts.find('.bag_box').slideDown();	
	}
	return false;
	});		
	
	$(this).find('.b_signin').on('click', function(){
		ts.find('.bag_box').slideUp();
		ts.find('a').removeClass('open');
	
		ts.find('.signin_register_box').fadeIn(270);
		ts.find('.h_f').addClass('filter_ef');
	return false;
	});			
	
});		
	
ts.find('.btn_L_R').on('click', function(){
	ts.find('.whats_news_box').fadeIn(270);
	ts.find('.h_f').addClass('filter_ef');
	return false;
	});	
	
ts.find('.btn_R_R').on('click', function(){
	ts.find('.shop_now_box').fadeIn(270);	
	ts.find('.h_f').addClass('filter_ef');
	return false;
	});	
			
ts.find('.shop_now_box .btn_X , .whats_news_box .btn_X').on('click', function(){
	$(this).parent().parent().fadeOut(270);
	ts.find('.h_f').removeClass('filter_ef');
	return false;
	});
	
ts.find('.signin_register_box .btn_X').on('click', function(){
	ts.find('.h_f').removeClass('filter_ef');	
	ts.find('.signin_register_box').fadeOut(270); 
	return false;  
	});

});		



$('*[class*="s_l_"]').each(function() {
	var ts = $(this);
		
ts.find('a.btn_shop_the_look , .btn_L_R').on('click', function(){
	ts.find('.shop_now_box').fadeIn(270);	
	ts.find('.h_f').addClass('filter_ef');
	return false;
	});	
ts.find('.shop_now_box .btn_X').on('click', function(){
	$(this).parent().parent().fadeOut(270);
	ts.find('.h_f').removeClass('filter_ef');
	return false;
	});		
	
});






// page_product
$('.page_product').each(function() {
	var ts = $(this);
	ts.find('a.btn_item_name').on('click' , function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').next().hide();	
		}else{
			ts.find('.p_info_box > div').hide();
			$(this).next().show();	
			$(this).addClass('open').siblings().removeClass('open');		
		}
	return false;
	});	
});<!-- page_product -->








/* Sign in & Register */
/* mockup 07 */
$('.bg.v07').each(function() {
	var ts = $(this);
		ts.find('.b_go_forgot').on('click', function(){
		ts.find('.popup_bg').fadeIn(210);
		ts.find('.forgot_box').css('left','50%');
		ts.find('.signin_register.v07').addClass('filter_ef');
		return false;
	});
	
	ts.find('.forgot_box a').on('click', function(){
		ts.find('.forgot_box').css('left','210%');
		ts.find('.check_info').css('left','50%');
		return false;
	});	
	
	ts.find('.check_info a').on('click', function(){
		ts.find('.signin_register.v07').removeClass('filter_ef');		
		ts.find('.check_info').css('left','210%');
		ts.find('.popup_bg').fadeOut(210);
		return false;
	});		
});


/* mockup 06 */
$('.signin_register.v06').each(function() {
	var ts = $(this);
	ts.find('.b_apply_now').on('click', function(){
		$(this).removeClass('add_b').addClass('add_a');
		ts.find('.apply_now_box').slideDown(450);
		ts.find('.signin_box , .forgot_box , .check_info').slideUp(210);
		return false;
	});
	
	ts.find('.b_back , .b_submit').on('click', function(){
		ts.find('.b_apply_now').removeClass('add_a').addClass('add_b');
		ts.find('.apply_now_box').slideUp(210);
		ts.find('.signin_box').slideDown(450);
		return false;
	});	
	
	ts.find('.b_go_forgot').on('click', function(){
		ts.find('.b_apply_now').removeClass('add_a').addClass('add_b');
		ts.find('.apply_now_box , .signin_box').slideUp(120);
		ts.find('.forgot_box').slideDown(450);
		return false;
	});		

	ts.find('.b_go_info').on('click', function(){
		ts.find('.forgot_box').slideUp(210);
		ts.find('.check_info').slideDown(450);
		return false;
	});
	
	ts.find('.b_go_signin').on('click', function(){
		ts.find('.check_info').slideUp(210);
		ts.find('.signin_box').slideDown(450);		
		return false;
	});		
		
	
});



/* mockup 03 */
$('.signin_register.v03').each(function() {
	var ts = $(this);
$(this).find('.btn_signin_v03 , .btn_register_v03 , .b_go_forgot , .go_info').on('click', function(){

if($(this).hasClass('btn_signin_v03')){
	ts.find('.forgot_box').hide();
	ts.find('.signin_box , > .hand_info').show();
	ts.find('.register_box').hide();
	$(this).removeClass('boo_s boo_s_f add_btn add_btn_2');
	ts.find('.btn_register_v03').addClass('add_btn').removeClass('boo_r boo_r_f add_btn_2');

}else if($(this).hasClass('btn_register_v03')){
	ts.find('.forgot_box').hide();
	ts.find('.signin_box').hide();
	ts.find('.register_box , > .hand_info').show();
	$(this).addClass('boo_r').removeClass('boo_r_f add_btn add_btn_2');
	ts.find('.btn_signin_v03').addClass('boo_s add_btn').removeClass('boo_s_f add_btn_2');
	
}else if($(this).hasClass('b_go_forgot')){
	ts.find('.forgot_box').show();
	ts.find('.signin_box , .register_box').hide();
	ts.find('.btn_signin_v03').addClass('boo_s_f add_btn').removeClass('boo_s');
	ts.find('.btn_register_v03').addClass('boo_r_f add_btn_2').removeClass('boo_r add_btn');
	
}else{
	ts.find('.forgot_box , .register_box').hide();
	ts.find('.signin_box , .btn_signin_v03 , .btn_register_v03').show();
	ts.find('.btn_signin_v03').removeClass('boo_s boo_s_f');
	ts.find('.btn_register_v03').removeClass('boo_r boo_r_f');
}
	
return false;
});
});


/* mockup 02 */
$('.signin_register.v02').each(function() {
	var ts = $(this); 
	
	$(this).find('.b_signin , .b_register , .b_go_forgot , .b_go_info , .b_go_signin').on('click', function(){
		
	if($(this).hasClass('b_signin')){
		$(this).addClass('select_this_v04').siblings().removeClass('select_this_v04');
		ts.find('.signin_box').show();
		ts.find('.register_box , .forgot_box , .check_info ').hide();

	}else if($(this).hasClass('b_register')){
		$(this).addClass('select_this_v04').siblings().removeClass('select_this_v04');
		ts.find('.register_box').show();
		ts.find('.signin_box , .forgot_box , .check_info ').hide();	
		
	}else if($(this).hasClass('b_go_forgot')){		
		ts.find('.forgot_box').show();
		ts.find('.signin_box , .register_box , check_info , > .hand_info').hide();	
		
	}else if($(this).hasClass('b_go_info')){
		ts.find('.check_info').show();		
		ts.find('.signin_box , .register_box , .forgot_box , > .hand_info').hide();		
			
	}else{
		ts.find('.signin_box , > .hand_info').show();
		ts.find('.check_info').hide();	
	}
	return false;
	});
});	




/* mockup 01 */
$('.signin_register.v01').each(function() {
	var ts = $(this);
	
	$(this).find('.btn_signin_v01 , .btn_register_v01 , .b_go_forgot').on('click', function(){
		
	if($(this).hasClass('btn_signin_v01')){
		$(this).addClass('select_this_v01').siblings().removeClass('select_this_v01');
		ts.find('.forgot_box').hide();
		ts.find('.signin_box').show();
		ts.find('.register_box').hide();
		
	}else if($(this).hasClass('btn_register_v01')){
		$(this).addClass('select_this_v01').siblings().removeClass('select_this_v01');
		ts.find('.forgot_box').hide();
		ts.find('.signin_box').hide();
		ts.find('.register_box').show();
	
	}else{
		var gotoHref = $($(this).attr('href')).offset().top;
		$('html, body').stop(true).animate({ scrollTop: gotoHref }, 250);	
	}
	return false;
	});

});













// btn + -
$('.plus_less_box').each(function () {
	var ts = $(this);
	var num = 0;
	
	function change_num(num_info){
		num += num_info;
		ts.find('.num_box').text(num);
	}

	ts.find('.less_img').on( 'click', function(){
	  	if(num === 0){
	  		change_num(0); 
	  	}else{
	  		change_num(-1); 
		} 
	return false;	  
	});

	ts.find('.plus_img').on( 'click', function(){
	change_num(1); 
	return false;			
	});
	change_num(1);
});


// btn mywish
$('.social_media_box').each(function() {
	$(this).find('.icon_mywish').on('click' , function(){
	if($(this).hasClass('solid')){
		$(this).removeClass('mywish_click solid');
	}else{
		$(this).addClass('mywish_click solid');	
	} 
	return false;	 	
	});
});


	
$('.black_boo').each(function() {
function random_num(){
random_num_A = Math.floor((Math.random()*2) );
}
random_num();
if (random_num_A == 0 ){
	$(this).find('.double_quotes .cool_info').html('You become what you believe !');
}else if(random_num_A == 1 ){
	$(this).find('.double_quotes .cool_info').html('Believing in Yourself!');
}

});



	
$('.btn_check_box , .btn_radio').on('click',function(){
	$(this).toggleClass('now_click');
	if($(this).hasClass('now_click')){
		$(this).find('.btn_img').addClass('r_c_p');
	}else{
		$(this).find('.btn_img').removeClass('r_c_p');
	}
	return false;
});



$('.ddm').each(function(){
	var ts = $(this);
	ts.find('.ddm_btn').on('click',function(){
	$(this).toggleClass('open');
	if($(this).hasClass('open')){
		ts.find('.ddm_menu').show();
		$(this).find('.btn_img').addClass('btn_up').removeClass('btn_down');
		$(this).addClass('border_color');
	}else{
		ts.find('.ddm_menu').hide();
		$(this).find('.btn_img').removeClass('btn_up').addClass('btn_down');
		$(this).removeClass('border_color');		
	}
	return false;	
	});
	
	ts.find('.ddm_menu a').on('click',function(){
		
		ts.find('.ddm_btn').removeClass('open border_color');
		ts.find('.btn_info').addClass('font_color');
		var th_text = $(this).html();
		ts.find('.ddm_menu').hide();
		ts.find('.btn_info').html(th_text);
		ts.find('.btn_img').removeClass('btn_up').addClass('btn_down');

	return false;			
	});
});<!-- ddm end -->
	
	


});<!-- end -->



