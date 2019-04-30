

function get_products_list(){
  $.ajax({
    url:"../xml-if/products_list_001.xml",
    cache:false,
    dataType:"xml",
    success:function(xml){

      $(xml).find("products_list").each(function() {

$('.ps_list').empty();

var pi_ = [];

$(this).find("product_info").each(function() {

  pi_ = '<div class="product_box"><a class="wish_icon" href="#">&nbsp;</a><img src="' 
  + $(this).find("img_url").text() + '"><div class="text"><div class="product_brand">' 
  + $(this).find("product_brand").text() + '</div><div class="product_name">' 
  + $(this).find("product_name").text() + '</div><div class="product_price">' 
  + $(this).find("product_price").text() + '</div></div></div>';

  $('.ps_list').append(pi_);



// for (var i = 0 ; i <= 10; i++) {

//   var dd += pi_[i];


// }



// $('.ps_list').append(dd);


});// xml product_info


$('.wish_icon').on('click', function() {
  $(this).toggleClass('click');
  return false;
});


});//xml products_list

}

});//ajax

  // return false;

}//function getXMLRacers

get_products_list();

