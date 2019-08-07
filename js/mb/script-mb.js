$(document).ready(function () {

    //initialising fullpage.js in the jQuery way
    $('#fullpage').fullpage({
        sectionsColor: ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
        navigation: true,
        slidesNavigation: true,
    });

    // calling fullpage.js methods using jQuery
    $('#moveSectionUp').click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

    $('#moveSectionDown').click(function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    //map btn
    $('#btn_1').click(function () {
        $('#area1').show('slow');
    });
    $('#btn_2').click(function () {
        $('#area2').show('slow');
    });
    $('#btn_3').click(function () {
        $('#area3').show('slow');
    });
    $('#btn_4').click(function () {
        $('#area4').show('slow');
    });
    $('#btn_5').click(function () {
        $('#area5').show('slow');
    });
    $('#btn_6').click(function () {
        $('#area6').show('slow');
    });
    $('#btn_7').click(function () {
        $('#area7').show('slow');
    });
    $('#btn_8').click(function () {
        $('#area8').show('slow');
    });

    //close
    $('.area').click(function () {
        $('#area1,#area2,#area3,#area4,#area5,#area6,#area7,#area8').hide();
    })

});
