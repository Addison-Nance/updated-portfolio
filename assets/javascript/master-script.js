// initalization for navs
$(".button-collapse").sideNav();
$('.modal-trigger').leanModal();
$('#push,secton').pushpin({ top:$('#push').height() });
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
// auto scroll nav on click
  $("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});