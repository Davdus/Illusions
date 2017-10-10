function scrollToAnchor(aid, aidOffset){
    var aTag = $("div[id='"+ aid +"']");
    $('html,body').animate(
        {
            scrollTop: aTag.offset().top+aidOffset+1
        },'slow');
}
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500)
            }
        });
    });
})(jQuery);