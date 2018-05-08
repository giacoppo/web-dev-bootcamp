$('button#fadeOut').on('click', function() {
    $('div.fadeOut').fadeOut(1000, function() {
        $(this).remove();
    });
});

$('button#fadeIn').on('click', function() {
    $('div.fadeIn').fadeIn(1000, function() {
        // $(this).remove();
    });
});

$('button#fadeToggle').on('click', function() {
    $('div.fadeToggle').fadeToggle(1000);
});

$('button#slideDown').on('click', function() {
    $('div.slideDown').slideDown();
});

$('button#slideUp').on('click', function() {
    $('div.slideUp').slideUp(1000, function() {
        $(this).remove();
    });
});

$('button#slideToggle').on('click', function() {
    $('div.slideToggle').slideToggle(1000, function() {
        console.log("SLIDE IS DONE!");
    });
});