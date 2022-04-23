window.onload = function () {
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

  })
}