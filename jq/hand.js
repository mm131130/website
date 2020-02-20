
$(window).on('load', function() {

$('body').prepend('<header class="m_HF v2"></header>');

$('header.m_HF.v2').load('../html-m/header-load.html' , function(){

    var ts_H = $(this);



    if ( $('div').hasClass('prtfolio_box') ) {
        
        $('.three_line').addClass('click');
        $('[class*="_nav"]').animate({left: '72px' }, 100);

    }
    
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

