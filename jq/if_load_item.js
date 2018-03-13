//Copyright Mountain - Chiou Wen Shan - 20171229 Building
$(function() {

$('body').prepend('<header class="v01"></header>').append('<footer class="v01"></footer>');
$('header.v01').load('../head_01.html' , function() {

var ts = $(this);

ts.find('.info_btn').on('click', function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open').find('.offer_info').slideUp(180);	
	}else{
		$(this).addClass('open').find('.offer_info').slideDown(210);			
	}
	return false;	
});	
	
});	
	

$('footer.v01').load('../foot_01.html' , function() {
	
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

});


$('.customer_care_menu').load('customer_care_menu.html' , function() {

$('.b_useful_information').on('click', function(){

	if ($(this).hasClass('open')){
		$(this).find('.rotate_icon').addClass('rotate_180');	
		$(this).removeClass('open').next().slideUp(270);	
		
	}else{
		$(this).find('.rotate_icon').removeClass('rotate_180');
		$(this).addClass('open').next().slideDown(270);
	}
	
});	

});	// load

});