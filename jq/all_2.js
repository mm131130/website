// 20190727
// three_line
// open_close


// $(function() {



$(window).on('load', function() {


$('body').prepend('<header class="m_HF v2"></header>');

$('header.m_HF.v2').load('../html-m/header-load.html' , function(){

  var ts_H = $(this);

    ts_H.find('.three_line').on('click', function() {
    $('.open_close').removeClass('baby_come_back');
    
    $('.content_menu').animate({left:'-320px'}, 100);

        if($(this).hasClass('click')){
            $(this).removeClass('click');

            ts_H.find('[class*="_nav"]').animate({left: '-400px'}, 100 , function(){
              $(this).find(' > li').removeClass('open');
              $(this).find(' > li > ul').slideUp(300);
            });

        }else{
            $(this).addClass('click');  

            if( ts_H.hasClass('v1') ){
                ts_H.find('[class*="_nav"]').animate({left: '0'}, 100);
            }else{
                ts_H.find('[class*="_nav"]').animate({left: '72px' }, 100);
            }
        }
        
    return false;
    });



    ts_H.find('[class*="_nav"] > li > span').on('click', function() {

      if($(this).parent().hasClass('open')){
        $(this).parent().removeClass('open');
        $(this).parent().find('> ul').slideUp(300);

      }else{
        $(this).parent().addClass('open').siblings().removeClass('open');
        $(this).parent().find('> ul').slideDown(300);

      }
    return false;

    });


    ts_H.find('[class*="_nav"] a').on('click', function() {

        ts_H.find('[class*="_nav"] li').removeClass('open');

        ts_H.find('.three_line').removeClass('click');
        ts_H.find('[class*="_nav"] ul').slideUp(300, function(){
           ts_H.find('[class*="_nav"]').animate({left: '-400px'}, 100 );

        });
    $('html, body').animate({scrollTop: $(this.hash).offset().top }, 1000);

    return false;
    });



    if (window.location.hash) scroll(0, 0);
    if (window.location.hash) {
        $('html, body').stop(true).animate({scrollTop: $(window.location.hash).offset().top }, 1000 );
    }
  });// header
});









$(window).on('load', function() {


$('.radio_btn_list a, .radio_btn, .sm_radio_box, .select_btn_list a, .select_btn, .sm_check_box').on('click', function() {

    if( $(this).parent().hasClass('radio_btn_list') || $(this).hasClass('radio_btn') || $(this).hasClass('sm_radio_box') ) {
      $(this).addClass('click').siblings().removeClass('click');

    }else if( $(this).parent().hasClass('select_btn_list') || $(this).hasClass('select_btn') || $(this).hasClass('sm_check_box') ){
      $(this).toggleClass('click');

    }
    return false;
});



var address_list = [
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">No.45, Shifu Rd., Xinyi Dist., Taipei City 110</div><div class="phone_num">8888-888-888</div>',
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">Chongqing S. Rd., Zhongzheng District Taipei City 10048</div><div class="phone_num">8888-888-888</div>',
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">No. 1, Sec. 4, Roosevelt Rd., Taipei 10617</div><div class="phone_num">8888-888-888</div>'
];



$('.ddm_if , .ddm_sm , .ddm').each(function () {
  var ts_ddm = $(this);
  var btn_text = '';


if ($(this).find('.ddm_menu').hasClass('month')) {

  var month = [];
  for (var i = 1 ; i <= 12; i++) {
    if(i <= 9 ){
      i = '0' + i;
    }
    month += '<a href="#">' + i + '</a>';
  }
  $(this).find('.month').html(month);

}else if ($(this).find('.ddm_menu').hasClass('day')) {
  
  var day = [];
  for (var i = 1 ; i <= 31; i++) {
    if(i <= 9 ){i = '0' + i;}
    day += '<a href="#">' + i + '</a>';
  }

  $(this).find('.month').html(day);

}else if ($(this).find('.ddm_menu').hasClass('year')) {
  var year = [];
  for (var i = 1 ; i <= 15; i++) {
    year += '<a href="#">' + ( 2019 + i - 1) + '</a>';
  }
  $(this).find('.year').html(year);

}

$(this).find('a.ddm_btn').on('click', function() {

    if ( ts_ddm.hasClass('click_rotate') ) {
      $(this).next().slideUp(180 , function(){
        ts_ddm.removeClass('click_rotate');
      });

    }else{
        ts_ddm.addClass('click_rotate');
        $(this).next().slideDown();
    }
    return false;
});

$(this).find('.ddm_menu a').on('click', function() {

    if($(this).parent('.ddm_menu').hasClass('issue') ){
      btn_text = $(this).find('> span:first-child').text();
    }else{
      btn_text = $(this).text(); 
    }

    if ( $(this).text() === 'Home') {
      ts_ddm.prevAll('.txt_info').empty().html('<a class="btn_edit" href="#">EDIT</a>' + address_list[0]);
    }else if ( $(this).text() === 'Offect') {
      ts_ddm.prevAll('.txt_info').empty().html('<a class="btn_edit" href="#">EDIT</a>' + address_list[1]);
    }else if ( $(this).text() === 'School') {
      ts_ddm.prevAll('.txt_info').empty().html('<a class="btn_edit" href="#">EDIT</a>' + address_list[2]);
    }

    ts_ddm.find('.btn_info').text(btn_text).addClass('click');

    ts_ddm.find('.ddm_menu').slideUp(180 , function(){
      ts_ddm.removeClass('click_rotate');
    });

  return false;
  });

});


$('.search').each( function() {
  var search = $(this);
  $(this).find('input').on('input', function() {

    if ($(this).val() === 'mo') {
      search.find('.ddm_menu').slideDown();
      search.find('.btn_X').addClass('show');
    }else{
      search.find('.ddm_menu').slideUp();
      search.find('.btn_X').removeClass('show');
    }
  return false;
  });


  $(this).find('a.btn_X , .ddm_menu a').on('click', function() {
    search.find('input').val('');
    search.find('.btn_X').removeClass('show');
    search.find('.ddm_menu').slideUp(function(){
    if( search.hasClass('v1') ){
      search.find('a.icon_search').removeClass('open');
      search.find('input').slideUp();
    }
  });

  return false;
  });

  $(this).find('a.icon_search').on('click', function() {

  if($(this).hasClass('open')){
      $(this).removeClass('open');
      search.find('input').val('');
      search.find('.ddm_menu').slideUp( function(){
      search.find('input').slideUp();
      });
  }else{
      $(this).addClass('open');
      search.find('input').slideDown();
  }
  
  return false;
  });

});
// search

$('.plus_less_box').each(function () {
    var qty = $(this);
    var num = 0;
    function change_num(num_info){
      num += num_info;
      qty.find('.num_box').text(num);
    }

    $(this).find(".less_icon").on('click', function(){
      if(num === 1){
        change_num(0); 
      }else{
        change_num(-1); 
      }
    return false;     
    });

    $(this).find(".plus_icon").on('click', function(){
      change_num(1); 
      return false;         
    });
    
    change_num(1);
});































$('.change-size').on('click', function() {

  if( $(this).hasClass('mobile') ) {
    $(this).removeClass('mobile') ;
    $('.change_size').removeClass('mobile_size_iphone6').addClass('ipad_w'); 
    $('.tag_arrow').removeClass('m320').addClass('i1024');

  }else{
    $(this).addClass('mobile') ;
    $('.ipad_w').removeClass('ipad_w').addClass('mobile_size_iphone6');
    $('.tag_arrow').removeClass('i1024').addClass('m320');

  }
  return false;
});



$('.open_close').on('click',function() {

  $('.m_HF.v2 .three_line').removeClass('click');

  $('.m_HF.v2 [class*="_nav"]').stop().animate({left: '-400px'}, 100 , function(){
      $(this).find(' > li').removeClass('open');
      $(this).find(' > li > ul').slideUp(300);
  });

  $(this).toggleClass('baby_come_back');

  if ($(this).hasClass('baby_come_back')) {
    $('.content_menu').stop().delay(300).animate({left:'72px'}, 100);
  }else{
    $('.content_menu').animate({left:'-320px'}, 100);
  }
  
  return false;
});



var win_W = $(window).width();
var win_H = $(window).height();
var now_page = 0;
var content_T = [];
var content_T_14710 = [];
var content_H = []; 
var touch_space = win_H/3;

// var touch_space = 150;

  if (win_W <= 1024 && win_W >= 769 ) {
    $('.rwd_demo').removeClass().addClass('rwd_demo ipad_w');
    $('.rwd_size_box .w-ipad_w').addClass('is_you').siblings().removeClass('is_you');

  }else if(win_W <= 768) {
    $('.rwd_demo').removeClass().addClass('rwd_demo ipad_h');
    $('.rwd_size_box .w-ipad_h').addClass('is_you').siblings().removeClass('is_you');

  }

var hmc = $('.rwd_demo > div').length;
var btn_text = [];
var build_menu = '';

$('.rwd_demo > div').each(function(i) {
  $(this).attr('id' , 'page_num_'+ (i+1));
  btn_text.push($(this).attr('date-title'));
  build_menu += '<a href="#page_num_'+ (i+1) +'"><span class="num">'+ (i+1) +'</span><span class="txt">'+ btn_text[i] +'</span></a>';
});

$('.content_menu').html(build_menu);

$('.content_menu a').on('click', function(){
      now_page = $(this).index();
      moveBody( content_T[now_page] );
      moveMenu( now_page );
      return false;
});

$('.content_num *:last-child').text(hmc);

function moveBody(go){

      var space_T = win_H/2 - content_H[now_page]/2;

      // if( go === 0 ){
      //       $('html, body').stop(true).animate({ scrollTop: 0 }, 360);

      // }else 

      if( $('.rwd_demo').hasClass('ipad_h') ){
            $('html, body').stop(true).animate({ scrollTop: go - 18 }, 360);

      }else if( $('.rwd_demo').hasClass('mobile_size_iphone7') ){
            $('html, body').stop(true).animate({ scrollTop: go - 30 }, 360);

      }else if( $('.rwd_demo').hasClass('mobile_size_iphone6') ){
            $('html, body').stop(true).animate({ scrollTop: go - 30 }, 360);

      }else if( $('.rwd_demo').hasClass('mobile_size_iphone5') ){
            $('html, body').stop(true).animate({ scrollTop: go - 30 }, 360);

      }else {
            $('html, body').stop(true).animate({ scrollTop: go - space_T }, 360);
      }
}

function moveMenu(num){
      $('.content_menu').stop(true).animate({ marginTop: - 50 * num + 'px' },300);
      $('.content_menu a').eq(num).addClass('tag_who').siblings().removeClass('tag_who');
      $('.content_num *:first-child').text(num + 1);
}

function control_menu_style(){
  if ( win_S_T <= content_T[0] + 72) {
      $('.control_menu .c_Bottom , .c_Next').removeClass('un_work');  
      $('.control_menu .c_Top , .c_Prev').addClass('un_work');

  }else if ( win_S_T >= content_T[ hmc - 1 ] - 150 ) {
      $('.control_menu .c_Top , .c_Prev').removeClass('un_work'); 
      $('.control_menu .c_Bottom , .c_Next').addClass('un_work');

  }else{
      $('.control_menu .c_Top , .c_Prev , .c_Bottom , .c_Next').removeClass('un_work');   
  }
}

function get_box_TH(){
  content_T.length = 0;
  // content_T_14710.length = 0;
  content_H.length = 0;

  $('.rwd_demo > div').each(function() {
      content_T.push( $(this).position().top );
      content_H.push( $(this).outerHeight() );
      content_T[0] = 0;
  });
}

var win_S_T = 0;

$(window).on('scroll', function() {

win_S_T = $(window).scrollTop();

  for (var sp = 0; sp < hmc; sp++) {
         if ( win_S_T >= content_T[sp] - touch_space ) {
              now_page = sp;
              $('.content_menu').css({ marginTop: - ( now_page * 50 ) + 'px' });
              $('.content_menu a').eq(now_page).addClass('tag_who').siblings().removeClass('tag_who');
              $('.content_num *:first-child').text(now_page + 1);
        }
    }

  control_menu_style();
  return false;

});//window scroll

function rwd_change(){
  $('.rwd_demo[class*="mobile_"] .popup_event_box , .rwd_demo.ipad_h .popup_event_box').siblings('*:not(.popup_bg)*:not(.coin_icon)*:not(.popup_event_box)*:not(.add_coins_note) ').addClass('filter_ef');
}

rwd_change();







// offset
// .position().top

var coin_event_box_T = 0;
var coin_event_box_H = 0;
var coin_T = 0;
function coin_event_box_TH(){


  coin_event_box_T = $('.rwd_demo .coin_event_box').position().top;
  coin_event_box_H = $('.rwd_demo .coin_event_box').outerHeight();





  // coin_event_box_T = $('.rwd_demo .coin_event_box').position().top;
  // coin_event_box_H = $('.rwd_demo .coin_event_box').outerHeight();

  coin_T = coin_event_box_T + ( coin_event_box_H / 2 );
  $('.coin_icon').css({top : coin_T +'px'});
}






$('.rwd_demo .popup_event_box').after('<div class="popup_bg">&nbsp;</div>');

$('.rwd_size_box > a').on('click' , function() {

  $(this).addClass('is_you').siblings().removeClass('is_you');
  // $('.rwd_demo').removeClass().addClass('rwd_demo');

  $('.rwd_demo').removeClass().addClass('rwd_demo').find('*').removeClass('filter_ef').css({display : '' , top : '' , bottom : '' , marginBottom : ''});
  $('.rwd_demo .popup_event_box').siblings().removeClass('filter_ef');

    if( $(this).hasClass('w-fullscreen') ){
      $('.rwd_demo').addClass('w_fullscreen');

    }else if( $(this).hasClass('w-1400') ){
      $('.rwd_demo').addClass('w_1400');

    }else if( $(this).hasClass('w-ipad_w') ){
      $('.rwd_demo').addClass('ipad_w');

    }else if( $(this).hasClass('w-ipad_h') ){
      $('.rwd_demo').addClass('ipad_h');
      rwd_change();

    }else if( $(this).hasClass('w-414') ){

      $('.rwd_demo').addClass('mobile_size_iphone7');
      $('.rwd_demo .open_list .page_box').css('margin-left' , '0');
      rwd_change();

    }else if( $(this).hasClass('w-375') ){
      $('.rwd_demo').addClass('mobile_size_iphone6');
      $('.rwd_demo *:not([class^="product_"]) .page_box').css('margin-left' , '0');
      rwd_change();

    }else if( $(this).hasClass('w-320') ){
      $('.rwd_demo').addClass('mobile_size_iphone5');
      $('.rwd_demo *:not([class^="product_"]) .page_box').css('margin-left' , '0');
      rwd_change();
    
    }

coin_event_box_TH();
get_box_TH();
return false;

});





















$('.c_Top , .c_Bottom, .c_Prev , .c_Next').on('click', function() {

  if( $(this).hasClass('c_Top') ){

    $('html, body').stop(true).animate({ scrollTop: 0 }, 210);
    moveBody( now_page = 0 ); 

  }else if( $(this).hasClass('c_Bottom') ){
    moveBody( content_T[hmc - 1]);

  }else if( $(this).hasClass('c_Prev') ){


    if( $('.rwd_demo').hasClass('mobile_size_iphone7') && win_W >= 1025){

      if(now_page === 2 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 3 ]);     
      }

    }else if( $('.rwd_demo').hasClass('mobile_size_iphone6') && win_W >= 1025){

      if(now_page === 2 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 3 ]);     
      }

    }else if( $('.rwd_demo').hasClass('mobile_size_iphone5') && win_W >= 1025){

      if(now_page === 2 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 3 ]);     
      }

    }else if( $('.rwd_demo').hasClass('mobile_size_iphone7') && win_W >= 769 && win_W >= 1024){

      if(now_page === 1 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 2 ]);     
      }

    }else if( $('.rwd_demo').hasClass('mobile_size_iphone6') && win_W >= 769 && win_W >= 1024){

      if(now_page === 1 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 2 ]);     
      }

    }else if( $('.rwd_demo').hasClass('mobile_size_iphone5') && win_W >= 769 && win_W >= 1024){

      if(now_page === 1 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 2 ]);     
      }

    }else{

      if(now_page === 0 ){    
        moveBody( content_T[ now_page = 0 ]); 
      }else{
        moveBody( content_T[ now_page - 1 ]);     
      }

    }

  }else if( $(this).hasClass('c_Next') ){
    
    if(now_page === hmc-1 ){
      moveBody( content_T[ now_page = hmc-1 ]); 
    }else{
      moveBody( content_T[ now_page + 1]);       
    }
     
  }
return false; 
});

get_box_TH();
control_menu_style();
moveBody( now_page );
moveMenu( now_page );


if( $('.rwd_demo').find('div').hasClass('coin_event_box') ) {
    
coin_event_box_TH();

}



$('.rwd_demo > div').each(function() {

var ts = $(this);

// .plus_less_box
// .num_box
// .less_icon
// .plus_icon

ts.find('.plus_less_box').each(function () {

    var num = 0;
 
    var price = ts.find('.get_num').text();
    // var price_num = price.match(/\d+/g);
    var price_num = price.match(/\d+/g);

    function change_num(num_info){
        num += num_info;
        ts.find('.num_box').text(num);
        var product_price = price_num * num;
        ts.find('.get_num').text('$' + product_price );
    }

    $(this).find(".less_icon").on( 'click', function(){
        if(num === 1){
            change_num(0); 
        }else{
            change_num(-1); 
        }
    return false;     
    });

    $(this).find(".plus_icon").on('click', function(){
      change_num(1); 
      return false;         
    });
    
    change_num(1);
});



ts.find('.show_shop_now , .show_what_is_new').on('click', function() {
  if($(this).hasClass('show_shop_now')){
    ts.find('.shop_now_box').fadeIn(270).siblings('*:not(.popup_bg)*:not(.coin_icon) ').addClass('filter_ef');
  }else{
    ts.find('.what_is_new_box').fadeIn(270).siblings('*:not(.popup_bg)*:not(.coin_icon) ').addClass('filter_ef');
  }
  return false;
});

ts.find('.coin_icon').on('click', function(){

$(this)
.animate({top:coin_T + 75 + 'px'},180)
.animate({top:coin_T - 200 + 'px'},180)
.animate({top:coin_T + 1200 + 'px'},180).fadeOut(270);

if ( ts.parent().hasClass('ipad_h') ) {
    ts.find('.coin_event_box').delay(450).animate({bottom:'54%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 
    ts.find('.add_coins_note').delay(740).fadeIn(270).delay(3000).fadeOut(270);
    
}else if( ts.parent().hasClass('mobile_size_iphone7') ) {
    ts.find('.coin_event_box').delay(450).animate({bottom:'54%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 
    ts.find('.add_coins_note').delay(740).fadeIn(270).delay(3000).fadeOut(270);
    
}else if( ts.parent().hasClass('mobile_size_iphone6') ) {
    ts.find('.coin_event_box').delay(450).animate({bottom:'102%'},90).animate({bottom:'-1200px'},270).fadeOut(270);  
    ts.find('.add_coins_note').delay(740).fadeIn(270).delay(3000).fadeOut(270);

}else if( ts.parent().hasClass('mobile_size_iphone5') ) {
    ts.find('.coin_event_box').delay(450).animate({bottom:'102%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 
    ts.find('.add_coins_note').delay(740).fadeIn(270).delay(3000).fadeOut(270);

}else{
    ts.find('.coin_event_box').delay(450).animate({bottom:'180px'},90).animate({bottom:'-1200px'},270).fadeOut(270);  
    ts.find('.add_coins_note').delay(740)
    .animate({bottom:'33%'},150)
    .animate({bottom:'45px'},240).delay(3000)
    .animate({bottom:'-300px'},240).fadeOut(270);  

}

ts.find('.popup_bg').delay(450).fadeOut(360, function(){
    $(this).css('display', 'none');
    ts.find('*').removeClass('filter_ef');
});

  // if( coin_up_down === 0 ){ 
  //   $(this).animate({bottom:'210px'},360).animate({bottom:'330px'},120).animate({bottom:'-1200px'},240);
  //   ts.find('.coin_event_box').delay(450).animate({bottom:'117px'},150).animate({bottom:'-1200px'},240);  
  //   ts.find('.coin_add_info').delay(740).animate({bottom:'120px'},150).animate({bottom:'72px'},240).delay(3000).animate({bottom:'-1200px'},240);  
      
  // }else if ( coin_up_down === 1 ){
  // $(this).animate({bottom:'36px'},360).animate({bottom:'156px'},120).animate({bottom:'-1200px'},240);
  // ts.find('.coin_add_info').delay(600).animate({bottom:'120px'},150).animate({bottom:'72px'},240).delay(3000).animate({bottom:'-1200px'},240);
  // }
  return false; 
});   

ts.find('.popup_event_box .btn_X , .popup_box .btn_X , .coin_event_box .btn_X').on('click', function(){

if($(this).parents().hasClass('coin_event_box')){
  
  ts.find('.coin_icon').delay(360)
  .animate({top:coin_T + 200 + 'px'},180)
  .animate({top:coin_T - 200 + 'px'},180)
  .animate({top:coin_T + 1200 + 'px'},180).fadeOut(270);

  if ( ts.parents().hasClass('ipad_h') ) {
      ts.find('.coin_event_box').animate({bottom:'54%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 
      
  }else if( ts.parents().hasClass('mobile_size_iphone7') ) {
      ts.find('.coin_event_box').animate({bottom:'54%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 
      
  }else if( ts.parents().hasClass('mobile_size_iphone6') ) {
      ts.find('.coin_event_box').animate({bottom:'102%'},90).animate({bottom:'-1200px'},270).fadeOut(270);  

  }else if( ts.parents().hasClass('mobile_size_iphone5') ) {
      ts.find('.coin_event_box').animate({bottom:'102%'},90).animate({bottom:'-1200px'},270).fadeOut(270); 

  }else{
      ts.find('.coin_event_box').animate({bottom:'180px'},90).animate({bottom:'-1200px'},270).fadeOut(270);  
  }

}else if($(this).parents().hasClass('popup_event_box')){

  ts.find('.popup_event_box').fadeOut(270);

}else if($(this).parents().hasClass('popup_box')){

  ts.find('.popup_box').fadeOut(270);

}

ts.find('.popup_bg').delay(360).fadeOut(360, function(){
  $(this).css('display', 'none');
  ts.find('*').removeClass('filter_ef');

});

  return false;
});



});// rwd_demo > *



// $('.icon_my_favorites').on('click', function() {

//   if ($(this).hasClass('click')) {}
//   return false;
// });






$('.slide_show:not(.products_box)').each(function() {

  var ts_slide_show = $(this);
  var build_dot_btn = '';
  var build_img_btn = '';
  var build_img_btn_2 = '';
  // products list page slide show
  var build_img_btn_3 = '';

  var now_tag = 0;
  var hmp = $(this).find('.page_box > .page').length;
  var img_url = [];
  var img_url_2 = [];  




  $(this).find('.page_box > .page').each(function(i) {
      img_url.push($(this).attr('date-icon-src'));

      img_url_2.push($(this).find('img').attr('src'));

      build_dot_btn += '<a href="#">&nbsp;</a>';

      build_img_btn += '<a href="#"><span class="img_box"><img src=" '+ img_url[i] +' "></span></a>';

      build_img_btn_2 += '<a href="#"><span class="img_box"><img src=" '+ img_url_2[i] +' "></span></a>';

      build_img_btn_3 += '<a href="#"><span class="">$nbsp;</span></a>';

  });
  

      $(this).find('.dot_box').html(build_dot_btn);
      $(this).find('.dot_box.icon').html(build_img_btn);
      $(this).find('.dot_box.icon._v4').html(build_img_btn_2);
      $(this).find('.dot_box.icon._v6').html(build_img_btn_3);

      $(this).find('.page_num.v4 .total_page_num').text(hmp);

      function slide_LR(i){
          now_tag = i;

          ts_slide_show.find('.page_box').stop(true).css({ marginLeft:- 100 * i + '%' });
          ts_slide_show.siblings('.products_list').find('.page_box').stop(true).css({ marginLeft:- 100 * i + '%' });


          ts_slide_show.find('.page_num .buoy').css({ width:'calc(' + (100 / hmp) * ( now_tag + 1) + '% - 4px)' });
          ts_slide_show.find('.now_page_num').text(now_tag + 1);

        change_style();
      }



      function change_style(){

            if(now_tag === 0){
                ts_slide_show.find('.l_icon').addClass('un_click');
                ts_slide_show.find('.btn_L').stop(true).css({left:'calc(0% - 68px'});
            }else{
                ts_slide_show.find('.l_icon').removeClass('un_click');
                ts_slide_show.find('.btn_L').stop(true).css({left:'calc(0% + 18px'});
            }

            if(now_tag === hmp-1){
                ts_slide_show.find('.r_icon').addClass('un_click');
                ts_slide_show.find('.btn_R').stop(true).css({left:'calc(100% + 68px'});
            }else{
                ts_slide_show.find('.r_icon').removeClass('un_click');
                ts_slide_show.find('.btn_R').stop(true).css({left:'calc(100% - 68px'});
            }

            ts_slide_show.find('.dot_box a').eq(now_tag).addClass('click_now').siblings().removeClass('click_now');
      }




      $(this).find('.dot_box a').on('click', function() {



            slide_LR( now_tag = $(this).index() );


        

            return false;



      });




      $(this).find('.dot_box a').on('click', function() {
            slide_LR(now_tag = $(this).index());
            return false;
      });


      $(this).find('.btn_L , .btn_R , .btn_LR .l_icon , .btn_LR .r_icon ').on('click', function() {

        if ($(this).hasClass('btn_L') ) {

          if(now_tag === 0){
            slide_LR( now_tag = 0);
          }else{
            slide_LR( now_tag -= 1);
          }

        }else if($(this).hasClass('btn_R')){
         
          if(now_tag === hmp-1){
            slide_LR( now_tag = hmp-1);
          }else{
            slide_LR( now_tag += 1);
          }

        }else if ($(this).hasClass('l_icon')) {

          if(now_tag === 0){
            slide_LR( now_tag = 0);
          }else{
            slide_LR( now_tag -= 1);
          }
        
        }else if($(this).hasClass('r_icon')){
         
          if(now_tag === hmp-1){
            slide_LR( now_tag = hmp-1);
          }else{
            slide_LR( now_tag += 1);
          }
        }
         
      return false;
    
      });


  if( ts_slide_show.parent().hasClass('product_owl_clutch') ){
    slide_LR(2);
  }else{
    slide_LR(now_tag);
  }

});
// slide show


if(win_W < 767) {
    $('.rwd_demo').removeClass().addClass('rwd_demo mobile_size_iphone5');
}


});
// end





$(window).resize( function() {
  var win_W = $(window).width();

  if( win_W >= 1025 ) {
    $('.rwd_demo').removeClass().addClass('rwd_demo w_1400');
    $('.rwd_size_box .w-1400').addClass('is_you').siblings().removeClass('is_you');

  }else if( win_W === 1024 ) { 
    $('.rwd_demo').removeClass().addClass('rwd_demo ipad_w');
    $('.rwd_size_box .w-ipad_w').addClass('is_you').siblings().removeClass('is_you');

  }else if( win_W <= 1023 && win_W >= 768 ) {
    $('.rwd_demo').removeClass().addClass('rwd_demo ipad_h');
    $('.rwd_size_box .w-ipad_h').addClass('is_you').siblings().removeClass('is_you');

  }else if( win_W < 767 ) {
    $('.rwd_demo').removeClass().addClass('rwd_demo mobile_size_iphone5');
  }

});







