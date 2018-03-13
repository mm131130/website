$(function(){
	
	
$('.sm_ddm').each(function() {
	var ts = $('.sm_ddm');
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
		ts.find('.btn_info').html(th_text);
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
	return false;

});//radio_box and check_box

$('.b_my_wish').on('click', function() {
	var ts = $(this);
	
	if(ts.hasClass('click_icon')){
		ts.removeClass('click_icon');		
	}else{
		ts.addClass('click_icon');	
	
	}
	
	return false;

});





});