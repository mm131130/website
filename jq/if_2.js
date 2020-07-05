
$(function(){

var winw = 0;

var header_H = 0;
var info_box_L = 0;
var info_box_W = 0;

var btn_my_account_L = 0;
var btn_my_account_W = 0;

var btn_shopping_bag_L = 0;
var btn_shopping_bag_W = 0;

var btn_mywish_L = 0;
var btn_mywish_W = 0;

$(window).on('resize load' , function() {

winw = 0;

header_H = 0;
info_box_L = 0;
info_box_W = 0;

btn_my_account_L = 0;
btn_my_account_W = 0;

btn_shopping_bag_L = 0;
btn_shopping_bag_W = 0;

btn_mywish_L = 0;
btn_mywish_W = 0;


winw = $(window).width();

header_H = $('.if_v1 > header').outerHeight();

info_box_L = $('.if_v1 .event_info_B').offset().left;
info_box_W = $('.if_v1 .event_info_B').outerWidth();

// btn_s_r_L = $('.if_v1 .btn_s_r').offset().left;
// btn_s_r_W = $('.if_v1 .btn_s_r').outerWidth();

btn_my_account_L = $('.if_v1 .btn_my_account').offset().left;
btn_my_account_W = $('.if_v1 .btn_my_account').outerWidth();

btn_shopping_bag_L = $('.if_v1 .btn_shopping_bag').offset().left;
btn_shopping_bag_W = $('.if_v1 .btn_shopping_bag').outerWidth();

btn_mywish_L = $('.if_v1 .btn_mywish').offset().left;
btn_mywish_W = $('.if_v1 .btn_mywish').outerWidth();

// btn_search_L = $('.if_v1 .btn_search').offset().left;
// btn_search_W = $('.if_v1 .btn_search').outerWidth();



if( winw >= 1024 ){
    $('.if_v1 .promo_event_txt').prependTo('.if_v1 .event_info_B');
}else if( winw <= 1023 ){
    $('.if_v1 .promo_event_txt').prependTo('.if_v1 .offer_info_box');
}


if( winw >= 768 ){
    $('.if_v1 *').removeClass('click abc open open_menu');
    $('.if_v1 *').css({margin: ''});

    $('.if_v1 .offer_info_box').css({ left: ( info_box_W + info_box_L - 2 )  + 'px'  , top: header_H + 'px' });

    $('.if_v1 .my_account_box').css({ left: ( btn_my_account_W + btn_my_account_L - 2 )  + 'px' });
    $('.if_v1 .bag_list_box').css({ left: ( btn_shopping_bag_W + btn_shopping_bag_L - 2 )  + 'px' });
    $('.if_v1 .wish_list_box').css({ left: ( btn_mywish_W + btn_mywish_L - 2 )  + 'px' });

    $('.if_v1 *[class*="_nav"] > li').css('display', '');
    $('.if_v1 *[class*="_nav"] > li > ul').css('display', '');

    $('.if_v1 .btn_box_A').appendTo('.if_v1 .top_blue > div');
    $('.if_v1 .my_account_box').appendTo('.if_v1');
    $('.if_v1 .bag_list_box').appendTo('.if_v1');
    $('.if_v1 .wish_list_box').appendTo('.if_v1');

    if( $('.if_v1 .three_line').hasClass('click') ){
        $('.if_v1 .three_line').removeClass('click');
        $('.if_v1 [class*="_nav"]').animate({marginLeft: '-100%'}, 100);   
    }

}else if( winw <= 767 ){
$('.if_v1 .offer_info_box').css({ left:' 100% '  , top: header_H + 'px' });
     $('.if_v1 .btn_box_A').prependTo('.if_v1 .if_nav');
     $('.if_v1 .my_account_box').insertAfter('.if_v1 .btn_box_A .btn_my_account');
     $('.if_v1 .bag_list_box').insertAfter('.if_v1 .btn_box_A');
     $('.if_v1 .wish_list_box').insertAfter('.if_v1 .btn_box_A');
}
});




$('.if_v1').each(function() {
    
var if_v1 = $(this);

if_v1.find('.btn_s_r , .btn_my_account , .btn_shopping_bag , .btn_mywish , .btn_search , .btn_promo_info').on('click', function() {

    if( $(this).hasClass('btn_s_r') ){
        // $('').slideToggle(300).siblings('[class$="_box"]').slideUp(180);

    }else if($(this).hasClass('btn_my_account')){
        if_v1.find('.my_account_box').slideToggle(300).siblings('[class$="_box"]:not(.ps_box)').slideUp(180);

    }else if($(this).hasClass('btn_shopping_bag')){
        if_v1.find('.bag_list_box').slideToggle(300).siblings('[class$="_box"]:not(.ps_box)').slideUp(180);

    }else if($(this).hasClass('btn_mywish')){
        if_v1.find('.wish_list_box').slideToggle(300).siblings('[class$="_box"]:not(.ps_box)').slideUp(180);

    }else if($(this).hasClass('btn_search')){
        // if_v1.find('').slideToggle(300).siblings('[class$="_box"]').slideUp(180);

    }else if($(this).hasClass('btn_promo_info')){
        if_v1.find('.offer_info_box').slideToggle(300).siblings('[class$="_box"]:not(.ps_box)').slideUp(180);

    }

    // .offer_info_box
    return false;
});// 




if_v1.find('.three_line').on('click', function() {

        // if_v1.find('> *').siblings('[class$="_box"]:not(.ps_box)').slideUp(180);
            // $('.m_HF.v2 [class*="_nav"]').animate({marginLeft: '0px'}, 100);
            // $('.m_HF.v2 [class*="_nav"]').animate({marginLeft: '-320px'}, 100);

        if($(this).hasClass('click')){
            $(this).removeClass('click');
            if_v1.find('[class*="_nav"]').animate({marginLeft: '-100%'}, 100);   

        }else{
            $(this).addClass('click');  
            if_v1.find('[class*="_nav"]').animate({marginLeft: '0%'}, 100);
        }

    return false;
    });

    if_v1.find('[class*="_nav"] > li').on('click', function() {

    if( if_v1.find('.three_line').hasClass('click') ){

        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).find('> ul').slideUp(300);

        }else{
            $(this).addClass('open');
            $(this).siblings().removeClass('open');
            $(this).find('> ul').slideDown(300);
            $(this).siblings('li').find('> ul').slideUp(300);
        } 
    }

    return false;
    });

});// header


});// end