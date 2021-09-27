document.addEventListener('DOMContentLoaded', function foo(event) {
  document.querySelector('.search__submit').addEventListener('click', function () {
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

function select() {
  let selectHeader = document.querySelectorAll('.select__header')
  let selectItem = document.querySelectorAll('.options__item')
  selectToggle(selectItem)
  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle)
  })
  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose)
  })

  function selectChoose() {
    let text = this.innerText

    let select = this.closest('.select')
    let selectHidden = document.querySelector('.hidden-select')
    currentText = select.querySelector('.select__current')
    currentText.innerText = text
    selectHidden.value = text
    select.classList.remove('is-active')
  }
}

function selectToggle(val) {
  let funcvalue = val
  let selectHeader = document.querySelector('.select__header')
  this.parentElement.classList.toggle('is-active')
  document.querySelector('body').addEventListener('click', (e) => {
    const target = e.target
    if (target !== selectHeader || target !== funcvalue) {
      document.querySelector('.select').classList.remove('is-active')
    } else {
      console.log('ololo')
      selectToggle()
    }
  })
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

  dots: 'true',
  navigation: {
    nextEl: '.swiper-button-next-arrow',
    prevEl: '.swiper-button-prev-arrow',
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    500: {
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
  },
})
