$(function () {

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    direction: "horizontal",
    spaceBetween: 24,
    slidesPerView: 3,
    loop: false,

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: "#next-1",
      prevEl: "#prev-1",
    },
  });


  var galleryTop = new Swiper(".gallery-top", {
    direction: "horizontal",
    loop: false,
    spaceBetween: 0,
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  galleryTop.on('slideChange', function () {
    var currentSlide = galleryTop.realIndex;
    var element = document.querySelector('[data-slide="' + currentSlide + '"]');
    if(element) {
      element.click()
    }
    
  });


  // JavaScript код для закрытия выпадающего меню при клике вне меню
  $(document).on('click', function (e) {
    // Если клик был не на выпадающем меню и его дочерних элементах, скрываем меню
    if ($(e.target).closest('.list-header-filter').length === 0) {
      $('.list-header-filter .dropdown-menu').removeClass('shows');
    }
  });

  // JavaScript код для открытия/закрытия выпадающего меню при клике на кнопку
  $('.drop-toogle').on('click', function (e) {
    e.preventDefault();

    $('.list-header-filter .dropdown-menu').toggleClass('shows');
  });



  $('.y-color').each(function (e) {
    $(this).on("click", function () {
      var text = $(this).text()
      $(this).parents('.y-styled').find('.dropdown-toggle').text(text)
      var slideIndex = $(this).data('slide');
      galleryTop.slideTo(slideIndex);
      galleryTop_1.slideTo(slideIndex);
    })

  })
  var galleryThumbs_1 = new Swiper(".thumbs", {
    loop: false,
    direction: "horizontal",
    spaceBetween: 8,
    slidesPerView: 4,
    watchOverflow: true,
    centeredSlidesBounds: true,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      480: {
        direction: "vertical",
        slidesPerView: 4
      }
    },

    navigation: {
      nextEl: "#next-5",
      prevEl: "#prev-5"
    },
  });



  var galleryTop_1 = new Swiper(".gallery", {
    direction: "horizontal",
    loop: false,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: "#next-4",
      prevEl: "#prev-4"
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: false,
    thumbs: {
      swiper: galleryThumbs_1
    }
  });



  galleryTop_1.on('slideChange', function () {
    var currentSlide = galleryTop_1.realIndex;
    var element = document.querySelector('[data-slide="' + currentSlide + '"]');
    if(element) {
      element.click()
    }
  });

});




$('.more').on("click", function () {
  $(this).parent('.overall-detail-blocks').toggleClass('active')
})


$('.dropdown-block-holder').on("click", function () {
  $(this).toggleClass('active')
})




$(".tile").on("click", function () {
  var clickedTile = $(this);
  var isClicked = clickedTile.data("isClicked");

  if (!isClicked) {
    clickedTile
      .children(".photo")
      .css({ transform: "scale(" + clickedTile.attr("data-scale") + ")" });
    clickedTile.data("isClicked", true);
    clickedTile.addClass('active')
  } else {
    clickedTile.data("isClicked", false);
    clickedTile.removeClass('active')
    clickedTile.children(".photo").css({ transform: "scale(1)" });
  }
});

$(".tile")
  .on("mousemove", function (e) {
    var hoveredTile = $(this);
    var isClicked = hoveredTile.data("isClicked");

    if (isClicked) {
      hoveredTile
        .children(".photo")
        .css({
          "transform-origin":
            ((e.pageX - hoveredTile.offset().left) / hoveredTile.width()) *
            100 +
            "% " +
            ((e.pageY - hoveredTile.offset().top) / hoveredTile.height()) *
            100 +
            "%",
        });
    }
  })
  .on("mouseout", function () {
    var hoveredTile = $(this);
    var isClicked = hoveredTile.data("isClicked");
    hoveredTile.data("isClicked", false);
    hoveredTile.removeClass('active')

    if (isClicked) {
      hoveredTile.children(".photo").css({ transform: "scale(1)" });
    }
  })
  // tiles set up
  .each(function () {
    $(this)
      // add a photo container
      .append('<div class="photo"></div>')
      // set up a background image for each tile based on data-image attribute
      .children(".photo")
      .css({ "background-image": "url(" + $(this).attr("data-image") + ")" });
  });



$(".product-options-count-minus").click(function () {
  let $input = $(this).parent().find(".product-options-count-input input");
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});

$(".product-options-count .product-options-count-plus").click(function () {
  let $input = $(this).parent().find(".product-options-count-input input");
  let count = parseInt($input.val()) + 1;
  $input.val(parseInt(count));
});

$(".product-options-count .product-options-count-input input").bind("change keyup input click", function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, "");
  }
  if (this.value == "") {
    this.value = 1;
  }
});


$('.dropdown-block-holder input').on("change", function () {
  var val = $(this).val();
  $('.dropdown-block-holder .choose-value').text(val)
  $('.dropdown-block-holder').removeClass('active')
})

$('.collapse-btn').on("click", function () {
  $(this).toggleClass('active')
})


const swiper = new Swiper('.product-carousel', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.carousel-indicators',
  }
});

$('.y-save').on("click", function () {
  $(this).toggleClass('active')
})

$('.dropdown-item').on("click", function () {
  var text = $(this).text()
  $(this).parents('.y-styled').find('.dropdown-toggle').text(text)
})


var subItems = document.querySelectorAll('.open');

// Проходимся по каждому элементу и добавляем обработчик события
subItems.forEach(function (subItem) {
  // Получаем элемент .menu-item-has-children внутри текущего .sub-item
  var menuItemHasChildren = subItem.querySelector('.menu-item-has-children');

  if (menuItemHasChildren) {
    // Добавляем обработчик события для наведения мыши
    menuItemHasChildren.addEventListener('mouseenter', function () {
      // Добавляем класс 'active' к родительскому элементу .sub-menu
      var parentSubMenu = subItem.querySelector('.sub-menu');
      if (parentSubMenu) {
        parentSubMenu.classList.add('active');
      }
    });

    // Добавляем обработчик события для ухода мыши
    menuItemHasChildren.addEventListener('mouseleave', function () {
      // Удаляем класс 'active' у родительского элемента .sub-menu
      var parentSubMenu = subItem.querySelector('.sub-menu');
      if (parentSubMenu) {
        parentSubMenu.classList.remove('active');
      }
    });
  }
});


var slider = new Swiper(".slider", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.s-pagination',
    clickable: true
  },
});



var carousel = new Swiper(".carousel", {
  loop: false,
  direction: "horizontal",
  spaceBetween: 15,
  slidesPerView: 5,
  watchOverflow: true,
  centeredSlidesBounds: true,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  /*breakpoints: {
    480: {
      slidesPerView: 3
    }
  },*/

  navigation: {
    nextEl: "#next-5",
    prevEl: "#prev-5"
  },
});


function myCheck(e) {
  const x = document.getElementById(e);
  if (x.checked == true) {
    x.classList.add("checkend")
  } else {
    x.classList.remove("checkend")
  }
}



const numberInput = document.querySelectorAll(".y-phone")
const numberInput2 = document.querySelectorAll(".y-phone-numbers")

numberInput2.forEach(function (e) {
  e.addEventListener('input', function () {
    const regex = /^[0-9]*$/;
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
})


numberInput.forEach(function (e) {
  e.addEventListener('input', function () {
    const regex = /^[0-9+]*$/;
    if (!regex.test(this.value)) {
      this.value = this.value.slice(0, -1);
    }
  });
})

var yc = document.querySelectorAll('.y-country');

if (yc) {
  yc.forEach(function (i) {
    i.querySelectorAll('a').forEach(function (e) {
      e.addEventListener("click", function (i) {
        i.preventDefault();

        var dc = this.getAttribute('data-country');
        var dcode = this.getAttribute('data-code');

        // Найти родителя с классом .dropdown
        var dropdownParent = this.closest('.dropdown');

        if (dropdownParent) {
          // Внутри родителя обновить countrycode
          dropdownParent.querySelectorAll("countrycode").forEach(function (e) {
            e.textContent = dcode;
          });


          dropdownParent.querySelectorAll(".y-lang").forEach(function (e) {
            e.src = dc;
          });
        }

        // Обновить все элементы .y-lang
        
      });
    });
  });
}


const button = document.querySelectorAll('.btn-editt');

button.forEach(function (e) {
  const parent = e.closest('.modal')
  const ul = parent.querySelectorAll('h1 span');

  e.addEventListener("click", function () {
    if (e.textContent === 'Edit') {

      ul.forEach(function (li) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent;
        li.textContent = '';
        li.appendChild(input);
      });
      e.textContent = 'Save';

    } else {
      ul.forEach(function (li) {
        const input = li.querySelector('input');
        if (input) {
          li.textContent = input.value;
        }
      });
      e.textContent = 'Edit';
    }
  })

})


