$(function(){
$('body').prepend('<header class="sm_2018"></header>').append('<footer class="sm_2018"></footer>');
$('header.sm_2018').load("../html/head.html");
$('footer.sm_2018').load('../html/foot.html');

$('.left_menu').load('../html/menu_my_account.html');



});