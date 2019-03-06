

function get_products_list(){
  $.ajax({
    url:"../xml-if/products_list_001.xml",
    cache:false,
    dataType:"xml",
    success:function(xml){

      $(xml).find("products_list").each(function() {

$('.ps_list_box').empty();

  var pi_;


$(this).find("product_info").each(function() {
// var ps_ = [];

// var pl_ = '';<div class="item_num"></div>

  pi_ = '<div class="product_box"><a class="wish_icon" href="#">&nbsp;</a><img src="' 
  + $(this).find("img_url").text() + '"><div class="text"><div class="product_brand">' 
  + $(this).find("product_brand").text() + '</div><div class="product_name">' 
  + $(this).find("product_name").text() + '</div><div class="product_price">' 
  + $(this).find("product_price").text() + '</div></div></div>';

  // $('.ps_list_box').append(pi_);
$('.ps_list_box').append(pi_);



// $('.ps_list_box .product_box').each(function() {
//   var wish_html = '<a class="wish_icon" href="#">&nbsp;</a>';
//   $(this).append(wish_html);
// });

});// xml product_info


  
});//xml products_list


// $('.ps_list_box .product_box').each(function() {
//   var wish_html = '<a class="wish_icon" href="#">&nbsp;</a>';
//   $(this).append(wish_html);
// });

}

});//ajax

  // return false;

}//function getXMLRacers

get_products_list();

