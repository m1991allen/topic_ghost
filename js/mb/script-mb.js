$(document).ready(function () {

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

    $('.house').click(function () {
        $('body').toggleClass('overflow')
    })

    //close
    $('.close').click(function () {
        $('.area,.area_title').hide();
        $('body').toggleClass('overflow')
    })
    $('#close').click(function () {
        $('.area_title').hide();
    })

});



//typein
function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('#centeralign>p');
var delay = h1.innerHTML.length * speed + speed;
var pAll = document.querySelectorAll('#centeralign>p');
var pDelay = 0;
// type affect to header
typeEffect(h1, speed);

// type affect to body
setTimeout(function () {
    [].forEach.call(pAll, function (p) {
        setTimeout(function () {
            p.style.display = "inline-block";
            typeEffect(p, speed);
        }, pDelay);
        pDelay = pDelay + p.innerHTML.length * speed + speed;
    });
}, delay);


