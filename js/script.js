window.onload = function () {
  const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

function _removeClasses(list, remove) {
  for(let i = 0; i < list.length; i++){
    list[i].classList.remove(remove);
  }
};
  document.addEventListener('click', function (e) {

  const target = e.target;

  if (window.innerWidth > 768 && isMobile.any()) {
    if (target.classList.contains('menu__arrow')) {
      target.closest('.menu__item').classList.toggle('_hover');
    }

    if (!target.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length) {
      _removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
    }
  }

  if (target.classList.contains('search-form__icon')) {
    document.querySelector('.search-form').classList.toggle('_active');
  } else if (!target.closest('.search-form') && document.querySelector('.search-form._active')) {
    document.querySelector('.search-form').classList.remove('_active');
  }

  if (target.classList.contains('icon-menu')) {
    document.querySelector('.menu__body').classList.toggle('_active');
    console.log('active');
  }

});
}