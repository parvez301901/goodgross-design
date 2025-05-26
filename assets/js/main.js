$(document).ready(function () {
	$('.header_notification_icon').click(function (event) {
		event.preventDefault();
		$(this).find('.notification_holder').toggleClass('notification-active');
	});
	$('.header-livechat').click(function (event) {
		event.preventDefault();
		$(this).find('.notification_chat_box').toggleClass('notification-active');
	});
	/*Three Dots*/
    // Toggle "action" class on .threedots when clicking .notification_action_btn
    $('.notification_action_btn').click(function (e) {
        e.stopPropagation(); // Prevent event from bubbling up
        $(this).find('.threedots').toggleClass('active');
    });

    /*product retail - url to copy*/
	$(".copy_link_content_btn_link").on("click", function () {
		text = window.location.href;
		const el = document.createElement('textarea');
		el.value = text;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	});

	const currentUrl = window.location.href;
	$('.copy_val').val(currentUrl);

});

/*
const menuBtns = document.querySelectorAll('.collapse-btn');

function toggleMenu() {
    const menu = this.nextElementSibling;
    console.log(menu);
    if (menu.classList.contains('collapse-open')) {
        menu.classList.remove('collapse-open');
        menu.classList.add('collapse-closed');
    } else {
        menu.classList.remove('collapse-closed');
        menu.classList.add('collapse-open');
    }
}

menuBtns.forEach(function (btn) {
    btn.addEventListener('click', toggleMenu);
});


$('.upper').on('input', setFill);
$('.lower').on('input', setFill);

var max = $('.upper').attr('max');
var min = $('.lower').attr('min');

function setFill(evt) {
    var valUpper = $('.upper').val();
    var valLower = $('.lower').val();
    if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
    }

    var width = valUpper * 100 / max;
    var left = valLower * 100 / max;
    $('.fill').css('left', 'calc(' + left + '%)');
    $('.fill').css('width', width - left + '%');

    // Update info
    if (parseInt(valLower) == min) {
        $('.easy-basket-lower').html('0');
    } else {
        $('.easy-basket-lower').html(parseInt(valLower));
    }
    if (parseInt(valUpper) == max) {
        $('.easy-basket-upper').html('100');
    } else {
        $('.easy-basket-upper').html(parseInt(valUpper));
    }
}

$('.easy-basket-filter-info input').keyup(function () {
    var valUpper = $('.easy-basket-upper').html();
    var valLower = $('.easy-basket-lower').html();
    var width = valUpper * 100 / max;
    var left = valLower * 100 / max;
    if (valUpper > 5000) {
        var left = max;
    }
    if (valLower < 0) {
        var left = min;
    } else if (valLower > max) {
        var left = min;
    }
    $('.fill').css('left', 'calc(' + left + '%)');
    $('.fill').css('width', width - left + '%');
    // меняем положение ползунков
    $('.lower').val(valLower);
    $('.upper').val(valUpper);
});
$('.easy-basket-filter-info input').focus(function () {
    $(this).val('');
});
$('.easy-basket-lower').blur(function () {
    var valLower = $('.lower').val();
    $(this).val(Math.floor(valLower));
});
$('.easy-basket-upper').blur(function () {
    var valUpper = $('.upper').val();
    $(this).val(Math.floor(valUpper));
});

$(".copy_link").on('click', function (e) {
    e.stopPropagation()
    $(".copy_link_content").toggleClass("show_copy")
});

$(".copy_link_content").on('click', function (e) {
    e.stopPropagation()
})

$('body').on('click', function (e) {
    $(".copy_link_content").removeClass("show_copy")
})

window.onload = function () {
    setTimeout(() => {
        $('.copy_val').val(window.location.href)
    }, 600)
}

let colors = document.querySelectorAll('.semicircle');

colors.forEach((e) => {
    let val = e.dataset.color;

    if (0 <= val && val <= 29) {

        e.style.borderColor = '#BB1B08';
    } else if (30 <= val && val <= 49) {
        e.style.borderColor = '#EE3823';
    } else if (50 <= val && val <= 69) {
        e.style.borderColor = '#F7B500';
    } else if (70 <= val && val <= 89) {
        e.style.borderColor = '#73BF43';
    } else if (90 <= val && val <= 100) {
        e.style.borderColor = '#1D8848';
    }
})


var dd = $("[data-active-drive]")
var ddd = $('[data-deactive]')
var noactives = $('.noactive');

if (ddd.length > 0) {
    ddd.each(function () {
        $(this).on("click", function () {
            noactives = $('.noactive')

            if ($(this).find('input').checked !== true) {
                noactives.each(function () {
                    $(this).removeClass("noactive")
                })
            }


        })
    })
}

if (dd.length > 0) {
    dd.each(function () {
        $(this).on("click", function () {
            const checked = $(this).data("active-drive")

            if ($(this).find('input').checked !== true) {
                const elms = $('[data-active=' + checked)
                elms.each(function () {
                    $(this).addClass("noactive")
                })
            }
        })
    })
}




noactives.on("click", function (e) {
    e.stopPropagation()
})


$('body').on("click", function () {
    noactives = $('.noactive')

    if (noactives.length > 0) {

    }
})
*/