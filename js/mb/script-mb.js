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

    //close
    $('.close').click(function () {
        $('.area').hide();
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
var speed = 300;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function () {
    p.style.display = "inline-block";
    typeEffect(p, speed);
}, delay);
