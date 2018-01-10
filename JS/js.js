var menuhidden = false;

function scrollToAnchor(aid, aidOffset) {
    var aTag = $("*[id='" + aid + "']");
    $('html,body').animate(
        {
            scrollTop: aTag.offset().top + aidOffset + 1
        }, 'slow');
}

$(document).ready(function () {
    var menu = $('#menu');
    var body = $('#body');

    function scrollTopHigh(){
        console.log(menuhidden);
        if(menuhidden === false) {
            body.css({"overflow": "hidden"});
            menu.css({"position": "absolute", "top": $(this).scrollTop()    });
            menu.fadeIn(500);
        }
    }

    function scrollTopHigherThanBody(){
        menu.css({"position": "relative", "backgroundColor": "yellow"});
    }

    function scrollTopLow(){
        body.css({"overflow": "hidden"});
        menu.fadeOut(500);
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            scrollTopHigh();
        } else if ($(this).scrollTop() > $('#body').height) {
            scrollTopHigherThanBody();
        } else {
            scrollTopLow();
        }

        if ($(this).scrollTop() > $('#slideto').scrollTop()){
            body.css({"overflow": "auto"});
        } else {
            body.css({"overflow": "hidden"});
        }
    });

    $('#backButton').on('click', function () {
        scrollTopLow();
        menuhidden = true;
        setTimeout(function() {
            scrollToAnchor('body', 0);
        }, 500);
        setTimeout(function() {
            menuhidden = false;
        }, 2000);
    });
});