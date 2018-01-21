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
            body.css({"overflow": "auto"});
            menu.css({"position": "absolute", "top": $(this).scrollTop(),"display":"flex"});
            menu.fadeIn(500);
        }
    }

    function scrollTopHigherThanBody(){
        menu.css({"position": "absolute"});
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

        if ($(this).scrollTop() > $('#parallax').scrollTop()){
            body.css({"overflow-y": "auto"});
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
function openNav() {
    document.getElementById("menu").style.width = "30vw";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}