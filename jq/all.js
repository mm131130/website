
// ddm drop down menu
// plus_less_box
// slide_show
// search on click ifchic
// ddm - drop down menu 
//     - .ddm_if 
//     - .ddm_sm 
//     - .ddm



$(window).on('load', function() {

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

var address_list = [
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">No.45, Shifu Rd., Xinyi Dist., Taipei City 110</div><div class="phone_num">8888-888-888</div>',
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">Chongqing S. Rd., Zhongzheng District Taipei City 10048</div><div class="phone_num">8888-888-888</div>',
'<div class="name">Mountain Chiou</div><div class="area">Earth Asia</div><div class="address_txt">No. 1, Sec. 4, Roosevelt Rd., Taipei 10617</div><div class="phone_num">8888-888-888</div>'];

// drop down menu
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




$('.radio_btn , .sm_radio_box').on('click', function() {
  $(this).find('.icon').toggleClass('click')
  $(this).siblings().find('.icon').removeClass('click');
  return false;
});

$('.select_btn , .sm_check_box').on('click', function() {
    if( $(this).find('.icon').hasClass('click') ){
      $(this).next('form').slideDown();
      $(this).find('.icon').removeClass('click');

    }else{
      $(this).next('form').slideUp();
      $(this).find('.icon').addClass('click');

    }
  return false;
});



$('.plus_less_box').each(function () {
    var qty = $(this);
    var num = 0;
    function change_num(num_info){
        num += num_info;
        qty.find('.num_box').text(num);
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







$('.rwd_demo > div').each(function() {

// .num_box
// .less_icon
// .plus_icon
// .plus_less_box

var ts = $(this);
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



var event_box_H = 0;
var ts_box_T = 0;
if ($(this).find('.coin_event_box')) {
  event_box_H = $(this).find('.coin_event_box').outerHeight();
}


ts.find('.coin_icon').on('click', function() {

ts_box_T = ts.outerHeight();

$(this).animate({ marginBottom: '170px' }, 180).animate({ bottom:'-120px' , marginBottom:'0px'}, 270 );

ts.find('.coin_event_box').delay(180)
.animate({ marginBottom:'200px'}, 210 )
.animate({ bottom:'0' , marginBottom:'-600px'}, 180, function(){

  ts.find('.add_coins_note').css('display', 'block').animate({ marginBottom:'215px'}, 180 ).delay(2000)
  .animate({ marginBottom:'-100%'}, 120, function(){

    ts.find('.add_coins_note').css('display', 'none');
    ts.find('*').removeClass('filter_ef');  
    ts.find('.popup_bg').fadeOut(400, function(){
      $(this).css('display', 'none');
    });  

  });
});

  return false;
});

ts.find('.popup_event_box .btn_X , .popup_box .btn_X , .coin_event_box .btn_X').on('click', function() {

  if($(this).parents().hasClass('coin_event_box')){

      ts.find('.coin_event_box').animate({ marginBottom:'120px'}, 180 ).animate({ bottom:'-600px' , marginBottom:'0'}, 180 );
      ts.find('.coin_icon').delay(270)
      .animate({ bottom:'0' , marginBottom:'-30px'}, 180)
      .animate({ marginBottom: event_box_H + 'px'}, 270)
      .animate({ bottom:'0' , marginBottom:'-90px'}, 180, function(){
          ts.find('*').removeClass('filter_ef');  
          ts.find('.popup_bg').fadeOut(400, function(){
              $(this).css('display', 'none');
          });  
      });

  }else{

      $(this).parents('.popup_event_box , .popup_box').fadeOut(270);
      ts.find('*').removeClass('filter_ef');  
      ts.find('.popup_bg').fadeOut(400, function(){
            $(this).css('display', 'none');
      });  
  }

  return false;
});

});// screen_size












$('.slide_show').each(function() {

  var ts_slide_show = $(this);
  var build_dot_btn = '';
  var build_img_btn = '';
  var now_tag = 0;
  var hmp = $(this).find('.page_box > .page').length;
  var img_url = [];
  var img_url_2 = [];  


  $(this).find('.page_box > .page').each(function(i) {
      img_url.push($(this).attr('date-icon-src'));
      build_dot_btn += '<a href="#">&nbsp;</a>';
      build_img_btn += '<a href="#"><span class="img_box"><img src=" '+ img_url[i] +' "></span></a>';
  });
             
      $(this).find('.dot_box').html(build_dot_btn);

      $(this).find('.dot_box.icon').html(build_img_btn);

      $(this).find('.page_num').append('<div>'+ hmp +'</div>').prepend('<div>'+ (now_tag + 1) +'</div>');

      function slide_LR(i){

            now_tag = i;

            ts_slide_show.find('.page_box').stop(true).css({ marginLeft:- 100 * i + '%' });
            ts_slide_show.find('.buoy').css({ width:'calc(' + (100 / hmp) * ( now_tag + 1) + '% - 4px)' });
            ts_slide_show.find('.page_num > *:first-child').text(now_tag + 1);

        chang_style();
      }

      function chang_style(){

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


if( ts_slide_show.hasClass('product_owl_clutch') ){
  slide_LR(2);
}else{
  slide_LR(now_tag);
}

});
// slide show

});


