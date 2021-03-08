var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

$(".plant").click(function() {
  $(".wasclicked_img").toggleClass("wasclicked_active");
});

$(document).ready(function(){
    // $(this).scrollTop(0);
    });
    $(".home_works").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".work_box").offset().top
        -125}, 800);
    });
    $(".home_about").click(function() {
          
        $("body,html").animate({
            scrollTop: $(".about").offset().top
        -125}, 800);
    });