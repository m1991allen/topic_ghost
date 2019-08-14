$(document).ready(function () {
    // 滑動錨點
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    })
    // 符合裝置高度
    $(function () {
        var w = $(window).width();
        var h = $(window).height();
        $('#show').html(w + ':' + h);
    });

    // ghost mouse
    var div = document.getElementById('ghost');

    document.onmousemove = function () {

        var x = event.clientX, // Horizontal
            y = event.clientY; // vertical

        div.style.left = x + 30 + 'px';

        div.style.top = y + 30 + 'px';

    }

    //點擊地點顯示故事
    $('#area1').click(function () {
        $('#area1>p').show();
        $('#area1>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_1').show();
        $(this).addClass('z_index');
    });

    $('#area2').click(function () {
        $('#area2>p').show();
        $('#area2>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_2').show();
        $(this).addClass('z_index');
    });

    $('#area3').click(function () {
        $('#area3>p').show();
        $('#area3>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_3').show();
        $(this).addClass('z_index');
    });

    $('#area4').click(function () {
        $('#area4>p').show();
        $('#area4>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_4').show();
        $(this).addClass('z_index');
    });

    $('#area5').click(function () {
        $('#area5>p').show();
        $('#area5>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_5').show();
        $(this).addClass('z_index');
    });

    $('#area6').click(function () {
        $('#area6>p').show();
        $('#area6>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_6').show();
        $(this).addClass('z_index');
    });

    $('#area7').click(function () {
        $('#area7>p').show();
        $('#area7>.ghost_img').show();
        $('.set').css('display', 'none');
        $('#title_img_7').show();
        $(this).addClass('z_index');
    });

    $('#area8').click(function () {
        $('#area8>p').show();
        $('#area8>.ghost_img').show();

        $('#title_img_8').show();
        $(this).addClass('z_index');
    });

    $('.area').click(function () {
        $('#mask').css('display', 'block');
    })

    $('#mask').click(function () {
        $('#mask').css('display', 'none');
        $('.area>p, .ghost_img, #title_img_1, #title_img_2, #title_img_3, #title_img_4, #title_img_5, #title_img_6, #title_img_7, #title_img_8').hide();
        $('.set').css('display', 'inline');
        $('.area').removeClass('z_index');
    })

    // ghost img
    $("a[rel=group_1]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_2]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_3]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_4]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_5]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_6]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_7]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })
    $("a[rel=group_8]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">相片 ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    })


    // 下雨
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var cw = window.innerWidth;
    var ch = window.innerHeight;

    ctx.canvas.width = cw;
    ctx.canvas.height = ch;

    var rainSpeed = 25;
    var rainWeight = 1; // 1 being heaviest
    var raindrops = new Array();

    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;


    function Raindrop(x, length, opacity) {
        this.x = x;
        this.y = (0 - length) * (Math.random() * 15);
        this.length = length;
        this.opacity = opacity;
    }

    Raindrop.prototype.update = function () {
        if (this.y >= ch) {
            // Set drop back to the top of the screen
            this.y = ch - this.y - this.length * 5;

            // Get a new random length and opacity
            this.length = Math.floor(Math.random() * 150) + 80;
            this.opacity = Math.random() * (0.3 - 0) + 0;

        } else {
            // Increment y coordinate to move down the screen.
            this.y = this.y + rainSpeed;
        }

        ctx.beginPath();

        var grd = ctx.createLinearGradient(0, this.y, 0, this.y + this.length);
        grd.addColorStop(0, "rgba(255,255,255,0)");
        grd.addColorStop(1, "rgba(255,255,255," + this.opacity + ")");

        ctx.fillStyle = grd;
        ctx.fillRect(this.x, this.y, 1, this.length);

    }

    function makeRain() {
        raindrops = [];
        for (var i = 0; i < cw; i++) {
            if (parseFloat(i) ? !(i % rainWeight) : void 0) {
                var posX = i;
                // Get random length range
                var length = Math.floor(Math.random() * 550) + 280;
                var opacity = Math.random() * (0.2 - 0) + 0;
                var newDrop = new Raindrop(posX, length, opacity);
                raindrops.push(newDrop);
            }
        }
        draw();
    }

    makeRain();

    function draw() {

        ctx.clearRect(0, 0, cw, ch);
        for (var i = 0; i < raindrops.length; i++) {
            var currentDrop = raindrops[i];
            currentDrop.update();
        }

        requestAnimationFrame(draw);

    }
})


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
