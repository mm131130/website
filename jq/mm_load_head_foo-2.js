$( function() {

$('body').prepend('<header class="m_v2019"></header>').append('<footer class="mm_v2018"></footer>');

$('header.m_v2019').load('mm_head_03.html' , function(){

var ts = $(this);


    ts.find('.three_line').on('click', function() {

        if($(this).hasClass('click')){
            $(this).removeClass('click');
            ts.find('[class*="_nav"]').removeClass('margin_change');

        }else{
            $(this).addClass('click');  
            ts.find('[class*="_nav"]').addClass('margin_change');
        }

    return false;
    });



$(window).on('resize' , function() {
	var winw = $(window).width();

	if(winw >= 1024){

	    ts.find('*').removeClass('click margin_change abc open open_menu');
	    ts.find('.mm_nav > li').css('display', '');
	    ts.find('.mm_nav > li > ul').css('display', '');

	}else if(winw <= 1023){


	}
});// win resize



    ts.find('[class*="_nav"] a').on('click', function() {

    if( ts.find('[class*="_nav"]').hasClass('margin_change')  ){

        if($(this).hasClass('open')){

            $(this).parent().removeClass('open');
            // $(this).find('> ul').stop(true).slideUp(500);
            // $(this).find('> ul').css('display', 'none');
             $(this).parent().find('> ul').removeClass('open_menu');
        }else{

            $(this).parent().addClass('open');         
            // $(this).find('> ul').stop(true).slideDown(500);
            // $(this).find('> ul').css('display', 'block');
            $(this).parent().siblings().removeClass('open').find('.open_menu').removeClass('open_menu');
            $(this).parent().find('> ul').addClass('open_menu');
            
        } 
    }


    $('html, body').animate({scrollTop: $(this.hash).offset().top }, 1000);


    return false;
    });


    if (window.location.hash) scroll(0, 0);

    if (window.location.hash) {
        $('html, body').stop(true).animate({scrollTop: $(window.location.hash).offset().top }, 1000 );
    }











});// header


});// end