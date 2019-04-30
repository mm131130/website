
// ddm drop down menu
// plus_less_box
// slide_show

$(window).on('load', function() {




// drop down menu
$('.ddm').each(function () {

  var ts_ddm = $(this);
  var btn_text = '';

  $(this).find('.ddm_btn').on('click', function() {
    $(this).find('.btn_img').addClass('clic_rotate');
    $(this).next().slideToggle();
     return false;
  });

  $(this).find('.ddm_menu a').on('click', function() {
    btn_text = $(this).text();
    ts_ddm.find('.btn_info').text(btn_text).addClass('click');
    ts_ddm.find('.btn_img').removeClass('clic_rotate');
    ts_ddm.find('.ddm_menu').slideUp();
    return false;
  });

});






$('.screen_size').each(function() {

var ts = $(this);

// .num_box
// .less_icon
// .plus_icon
// .plus_less_box

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
//  






















ts.find('.slide_show').each(function() {

  var ts_slide_show = $(this);

  var build_dot_btn = '';
  var build_img_btn = '';

  var now_tag = 0;
  var hmp = $(this).find('.page_box > .page').length;
  var img_url = [];
  var img_url_2 = [];  

 // var build_img_btn_2 = '';


$(this).find('.page_box > .page').each(function(i) {
    img_url.push($(this).attr('date-icon-src'));


// if( ts_slide_show.hasClass('.black_white_m_photo') ){
//       img_url_2.push( $(this).find('img').attr('src') );
// }



  build_dot_btn += '<a href="#">&nbsp;</a>';
  build_img_btn += '<a href="#"><span class="img_box"><img src=" '+ img_url[i] +' "></span></a>';
  // build_img_btn_2 += '<a href="#"><span class="img_box"><img src=" '+ img_url_2[i] +' "></span></a>';


});
             
      $(this).find('.dot_box').html(build_dot_btn);

      $(this).find('.dot_box.icon').html(build_img_btn);

      // $('.black_white_m_photo').find('.dot_box').html(build_img_btn_2);

      $(this).find('.page_num').append('<div>'+ hmp +'</div>').prepend('<div>'+ (now_tag + 1) +'</div>');

      function slide_LR(i){

            now_tag = i;
            // ts.find('.page_box').stop().animate({});
            ts.find('.page_box').stop(true).css({ marginLeft:- 100 * i + '%' });

              // ts.find('.page_box').stop(true).animate({ marginLeft: - 100 * index + '%' }, 500);
            ts.find('.buoy').css({ width:'calc(' + (100 / hmp) * ( now_tag + 1) + '% - 4px)' });
            ts.find('.page_num > *:first-child').text(now_tag + 1);

            chang_style();
      }

      function chang_style(){

            if(now_tag === 0){
                ts.find('.l_icon').addClass('un_click');
                ts.find('.btn_L').stop(true).css({left:'calc(0% - 68px'});
            }else{
                ts.find('.l_icon').removeClass('un_click');
                ts.find('.btn_L').stop(true).css({left:'calc(0% + 18px'});
            }

            if(now_tag === hmp-1){
              ts.find('.r_icon').addClass('un_click');
                ts.find('.btn_R').stop(true).css({left:'calc(100% + 68px'});
            }else{
              ts.find('.r_icon').removeClass('un_click');
                ts.find('.btn_R').stop(true).css({left:'calc(100% - 68px'});
            }

            ts.find('.dot_box a').eq(now_tag).addClass('click_now').siblings().removeClass('click_now');

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

if( ts.hasClass('product_owl_clutch') ){
  slide_LR(2);
}else{
  slide_LR(now_tag);
}

});
// slide_show

});
// screen_size

});