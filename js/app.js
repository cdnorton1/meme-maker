var main = function() {
    $('#top-text').keyup(function() {
        var topValue = $(this).val();
        $('.top-caption').text(topValue);
    });
    $('#bottom-text').keyup(function() {
        var bottomValue = $(this).val();
        $('.bottom-caption').text(bottomValue);
    });
    $('#image-url').keyup(function() {
        var imgValue = $(this).val();
        $('img').attr("src", imgValue);
    });
};

$(document).ready(main);