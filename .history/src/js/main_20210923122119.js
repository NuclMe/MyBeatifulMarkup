document.addEventListener('DOMContentLoaded', function foo(event) {
  document.querySelector('.search-submit').addEventListener('click', function () {
    let parent = this.parentNode
    if (parent.classList.contains('search-opened')) {
      parent.classList.remove('search-opened')
    } else {
      parent.classList.add('search-opened')
    }
  })
  document.querySelector('.menu-burger').addEventListener('click', function () {
    let parent = this.parentNode
    if (parent.classList.contains('menu-opened')) {
      parent.classList.remove('menu-opened')
    } else {
      parent.classList.add('menu-opened')
    }
  })
})

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header')
  let selectItem = document.querySelectorAll('.select__item')

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle)
  })
  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose)
  })
  function selectToggle() {
    this.parentElement.classList.toggle('is-active')
  }
  function selectChoose() {
    let text = this.innerText
    let select = this.closest('.select')
    currentText = select.querySelector('.select__current')
    currentText.innerText = text
    select.classList.remove('is-active')

    // document.querySelector('body').addEventListener('click', (e) => {
    //   const target = e.target
    //   if (target !== selectHeader || selectItem) {
    //     select.classList.remove('is-active')
    //   } else {
    //     selectToggle()
    //   }

    // })
  }
}
select()

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next-arrow',
    prevEl: '.swiper-button-prev-arrow',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
})

const secondswiper = new Swiper('.second', {
  slidesPerView: 1,
  spaceBetween: 36,
  navigation: {
    nextEl: '.swiper-button-next-arrow',
    prevEl: '.swiper-button-prev-arrow',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1400: {
      slidesPerView: 4,
    },
  },
})
// Now you can use all slider methods like
secondswiper.slideNext()
swiper.slideNext()
