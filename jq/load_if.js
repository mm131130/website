
// $(function() {

$(window).on('load', function() {
	// 

var p_i = '';
var dot_box_products_list = '';
var products_num = 0;
var show_item = 0;
// var product_box_W = 0;

function get_products_list(){

$.ajax({
	url:"../xml-if/products_list_001.xml",
	cache:false,
	dataType:"xml",
	success:function(xml){
		
		$(xml).find("products_list").each(function() {
			$('.products_box .page_box').empty();

		$(this).find("product_info").each(function() {

			p_i = '<div class="product_box"><div class="item_num"></div><img src="' 
			+ $(this).find("img_url").text() + '"><div class="text"><div class="product_brand">' 
			+ $(this).find("product_brand").text() + '</div><div class="product_name">' 
			+ $(this).find("product_name").text() + '</div><div class="product_price">' 
			+ $(this).find("product_price").text() + '</div></div></div>';		

			$('.products_box .page_box').append(p_i);

		});//product_info

	
	});//products_list

	}

	});//ajax

}

get_products_list();

});
