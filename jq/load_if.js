
// $(function() {

$(window).on('load', function() {
	// 

var p_i = '';
var dot_box_products_list = '';
var products_num = 0;
var show_item = 0;
var product_box_W = 0;

function get_products_list(){

$.ajax({
	url:"../xml-if/products_list_001.xml",
	cache:false,
	dataType:"xml",
	success:function(xml){
		$(xml).find("products_list").each(function() {

		$('.products_box:not(.slide_show)').empty();
		$('.products_box .page_box').empty();

		$(this).find("product_info").each(function() {

			p_i = '<div class="product_box"><a class="icon_my_favorites" href="#">&nbsp;</a><div class="item_num"></div><a class="btn_B" href="#">Add to bag</a><img src="' 
			+ $(this).find("img_url").text() + '"><div class="text"><a class="product_brand" href="#">' 
			+ $(this).find("product_brand").text() + '</a><a class="product_name" href="#">' 
			+ $(this).find("product_name").text() + '</a><div class="p_price">' 
			+ $(this).find("product_price").text() + '</div></div></div>';		


			$('.products_box .page_box').append(p_i);
			$('.products_box:not(.slide_show)').append(p_i);

// var dot ='<a href="#"><span class="num">' + products_num + '</span><span class="img_box"><img src="'
// + $(this).find("img_url").text() +'"></span></a>';

		});//product_info



$('.row_list').each(function() {

var products_box = $(this);
var dot_products_box = '';
var dot_page_box = '';

var hmp = products_box.find('.page_box > div').length;

products_box.find('.total_page_num').text(hmp);

	products_box.find('.products_box > div').each( function(i) {
		dot_products_box += '<a href="#"><span class="img_box"><img src="  "></span></a>';
	});
	


	products_box.find('.page_box > div').each(function(i) {
		products_num = i+1 ;
		$(this).find('.item_num').html(products_num);
		dot_page_box += '<a href="#"><span class="img_box"></span></a>';
	});
	
products_box.find('> .dot_box').html(dot_products_box);

products_box.find('.slide_show .dot_box').html(dot_page_box);

products_box.find('.dot_box a').on('click', function(){
    slide_move($(this).index());
    // $('.one_line').css({background: '#000'});
    $(this).addClass('click_now').siblings().removeClass('click_now');
    return false;
});



products_box.find('.btn_L_most , .btn_R_most').on('click', function() {

        if ($(this).hasClass('btn_L_most') ) {

		products_box.find('.page_box').stop(true).animate({ scrollLeft: products_L[ 0 ] },360);
		products_box.find('.dot_box').stop(true).css({marginLeft: -98 * 0 +'px'});

        }else if($(this).hasClass('btn_R_most')){
         

		products_box.find('.page_box').stop(true).animate({ scrollLeft: products_L[ hmp-1] },360);
		products_box.find('.dot_box').stop(true).css({marginLeft: -98 * ( hmp-1 )  +'px'});
        }
         
      return false;
    
   });




		// build_dot_btn += '<a href="#item_'+ products_num +'">' + products_num + '</a>';
		// $(this).attr('id', 'item_' + products_num );
// total_page_num

		// dot_page_box += '<a href="#"><span class="num">' + products_num + '</span><span class="img_box"></span></a>';





var products_L = [];
var products_W = [];
// var slide_show_W = 0;
// var product_box_W = 0;

function products_LW(){
	slide_show_W = 0;
	product_box_W = 0;

	// slide_show_W = products_box.find('.page_box').outerWidth();
	slide_show_W = products_box.outerWidth();
	product_box_W = products_box.find('.page_box > div').outerWidth();

	products_L.length = 0;
	products_W.length = 0;

  products_box.find('.page_box > div').each(function() {
      products_L.push( $(this).position().left );
      products_W.push( $(this).outerWidth() );
 
  });
}





	function slide_move(index){
    	show_item = index;
	 
	// if( ( products_L[ show_item ] + product_box_W) >= ( slide_show_W / 2 )  ){
	//     products_box.stop(true).animate({ scrollLeft: ( product_box_W * index ) - ( slide_show_W / 2 - product_box_W / 2 ) },360);

	// }else{

	    // products_box.find('.page_box').stop(true).animate({ scrollLeft: ( product_box_W * index ) },360);
	
	// }

    // products_box.find('.dot_box').stop(true).animate({marginLeft: -98 * index +'px'},270);

	    products_box.find('.products_box:not(".slide_show")').stop(true).animate({ scrollLeft: ( product_box_W * index ) },360);
    	products_box.find('.page_box').stop(true).animate({ scrollLeft: ( product_box_W * index ) - ( slide_show_W / 2 - product_box_W / 2 ) },360);
		products_box.find('.dot_box').stop(true).css({marginLeft: -98 * (show_item )  +'px'});

	}
	function change_style(){





            // if(show_item === 0){

            //     products_box.find('.btn_L_most').stop(true).css({left:'calc(0% - 68px'});
            // }else{

            //     products_box.find('.btn_L_most').stop(true).css({left:'calc(0% + 18px'});
            // }

            // if(show_item === hmp-1){

            //     products_box.find('.btn_R_most').stop(true).css({left:'calc(100% + 68px'});
            // }else{

            //     products_box.find('.btn_R_most').stop(true).css({left:'calc(100% - 68px'});
            // }


		products_box.find('.now_page_num').text(show_item + 1);
		products_box.find('.dot_box a').eq(show_item).addClass('click_now').siblings().removeClass('click_now');

	}

change_style(show_item);


products_box.find('.product_box  .icon_my_favorites').on('click', function() {
	if ($(this).hasClass('click_')) {

		$(this).removeClass('click_');

	}else{


      $(this).addClass('click_');
	}
  return false;

});


// var last_arry_1 = products_L.pop();
// var last_arry_2 = products_L.pop();
var page_box_L = 0;

products_box.find('.page_box').on('scroll', function() {
page_box_L = $('.page_box').scrollLeft();

for (var sp = 0; sp < hmp; sp++) {



    if ( page_box_L == products_L[0]) {

		show_item = 0;
    	products_box.find('.dot_box').stop(true).animate({marginLeft: -98 * (show_item )  +'px'},270);

		change_style();

	}else if ( page_box_L >= products_L[sp] - slide_show_W / 2 ) {
		show_item = sp;

              // $('.content_menu').css({ marginTop: - ( now_page * 50 ) + 'px' });
              // $('.content_menu a').eq(now_page).addClass('tag_who').siblings().removeClass('tag_who');
              // $('.content_num *:first-child').text(now_page + 1);

    	products_box.find('.dot_box').stop(true).css({marginLeft: -98 * (show_item )  +'px'});
		change_style();


    }else if ( page_box_L + slide_show_W >= products_L[hmp-1] + products_W[hmp-1] / 2) {
		show_item = hmp-1;

    	products_box.find('.dot_box').stop(true).animate({marginLeft: -98 * (show_item )  +'px'},270);
		change_style();
	}

}

  // control_menu_style();
  return false;

});//window scroll

products_LW();

});

	
	});//products_list

	}

	});//ajax

}

get_products_list();

});
