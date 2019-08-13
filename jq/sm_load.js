
$(function() {

// function get_products_list(){
$.ajax({
			url:"../xml-ms/vino_list_001.xml",
			cache:false,
			dataType:"xml",
			success:function(xml){
				$(xml).find("sm_vino").each(function() {
					//var index=0;
				$('.bag_list').empty();
				// $('.box_xml , .editors_choice_xml').empty();


	$(this).find("info").each(function() {

var bag_list = [];

bag_list = '<div class="p_table"><div class="p_description"><div class="product_img"><img src="'
+ $(this).find("img_url").text() + '"></div><p class="product_brands">'
+ $(this).find("brands").text() + '</p><p class="product_name">'
+ $(this).find("name").text() + '</p><p>'
+ $(this).find("kind").text() + '</p></div><div class="p_qty">1</div><div class="p_price">'
+ $(this).find("price").text() + '</div></div>';

$('.bag_list').append( bag_list );

	});

	

	});//products_list

	
}

});//ajax
// }
//function getXMLRacers

// get_products_list();


});
