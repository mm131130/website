$(function(){

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







// products list



function wish_btn(){
$('.vino_products_box').each(function() {
	
	var ts = $(this);
	
	ts.find('.my_wish_icon').on('click', function() {

	if($(this).hasClass('click_icon')){
		$(this).removeClass('click_icon');		
	}else{
		$(this).addClass('click_icon');	
	}
	
	
	ts.find('.click_icon')	.each(function(i) {
		var num_wish = '';	
		num_wish = i+1;	
	
		if(num_wish >= 1){
		
			$('.b_my_wish').removeClass('num_zero');
		}else if(num_wish < 1){
	
			$('.b_my_wish > div').html('');	
			$('.b_my_wish').addClass('num_zero');
		}	
	$('.b_my_wish > div').html(num_wish);	
	});
	

	return false;
	});
	});	
}

function vino_add_now(){
$('.vino_info').each(function(){
	
	var ts = $(this);
	ts.on('click', function(){
		ts.addClass('r');
		ts.find('.vino_p_img').animate({	height:'146px'},100, function(){
		ts.find('.sm_p_info').slideUp(100);
		});
		ts.find('.shop_now_box').slideDown(270);	
	ts.find('.b_plus_minus').addClass('rotate_135');	
		
	return false;		
	});
	
	
	ts.find('.b_plus_minus').on('click', function(){
		
	if(ts.hasClass('r')){
		ts.removeClass('r');
			ts.find('.shop_now_box').slideUp(100,function(){
			ts.find('.vino_p_img').animate({	height:'240px'},100);
			
		});
		ts.find('.sm_p_info').slideDown(270);
		
	ts.find('.b_plus_minus').removeClass('rotate_135');	
	
	}else{
		ts.addClass('r');
		ts.find('.vino_p_img').animate({	height:'146px'},100, function(){
		ts.find('.sm_p_info').slideUp(100);
		});
		ts.find('.shop_now_box').slideDown(270);	
	ts.find('.b_plus_minus').addClass('rotate_135');					
	}
	return false;
	});

});//.vino_info
}//vino_add_now

	function get_products_list(){
		$.ajax({
			url:"../xml/vino_list_001.xml",
			cache:false,
			dataType:"xml",
			success:function(xml){
				$(xml).find("sm_vino").each(function() {
					//var index=0;
				$('.vino_products_box').empty();
					$(this).find("info").each(function() {
	var product_list = '';
	var product_box = new Array;
	//var product_box = [];
	
	var home_page_products_list = '<div class="vino_info"><a class="my_wish_icon" href="#">&nbsp;</a><div class="vino_kind">' 
	+ $(this).find("kind").text() + '</div><img class="vino_p_img" src="' 
	+ $(this).find("img_url").text() + '"><div class="sm_p_info"><div class="vino_area">' 
	+ $(this).find("area").text() + '</div><div class="vino_name">' 	
	+ $(this).find("name").text() + '</div></div><div class="shop_now_box"><div class="vino_price">' 
	+ $(this).find("price").text() + '</div><a class="btn_wine_red num_add_bag" href="#">Add To Shopping Bag</a><a href="#">View Product Details</a></div><a class="b_plus_minus" href="#">&nbsp;</a></div>';		
	
	
	
	

	var products = '<div class="vino_info"><a class="b_my_wish" href="#">&nbsp;</a><div class="vino_kind">' 
	
	+ $(this).find("kind").text() + '</div><img src="' 
	+ $(this).find("img_url").text() + '"><div class="vino_name"><span>name</span>' 
	+ $(this).find("name").text() + '</div><div class="vino_price"><span>price</span>' 
	+ $(this).find("price").text() + '</div><div class="vino_color"><span>color</span>' 
	+ $(this).find("color").text() + '</div><div class="vino_perfume"><span>perfume</span>' 
	+ $(this).find("perfume").text() + '</div><div class="vino_flavor"><span>flavor</span>' 
	+ $(this).find("flavor").text() + '</div><div class="vino_serving_suggestions"><span>gastronomic combinations</span>' 
	+ $(this).find("gastronomic_combinations").text() + '</div><div class="vino_tasting_temperature"><span>tasting temperature</span>' 
	+ $(this).find("tasting_temperature").text() + '</div><div class="vino_area"><span>area</span>' 
	+ $(this).find("area").text() + '</div><div class="vino_producer"><span>producer</span>' 
	+ $(this).find("producer").text() + '</div><div class="vino_analysis"><span>analysis</span>' 
	+ $(this).find("analysis").text() + '</div></div>';		
		
	product_box.push( home_page_products_list );
	
	for ( var i=0; i < product_box.length; i++ ){
		product_list += product_box[i];
	}

	$('.vino_products_box').append( product_list );


	
	//index += 1;
	});
	//$('.finishers_all').append( index );		
	

	});//products_list
	
	wish_btn();
	vino_add_now();
	num_my_wish();	
	
}

});//ajax
}//function getXMLRacers

get_products_list();








});