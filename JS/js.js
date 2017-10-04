$('<img/>').hide().attr('src', '../IMG/startimeffects.png').load(function(){
    $('startimg').append($(this));
});
$('#fb').hover(function() {
    $('input[type=button]').css('background-image', 'url("images/background.jpg")');
}, function() {
    $('startimg').css('background', '');
});
