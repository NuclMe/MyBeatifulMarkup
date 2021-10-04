document.addEventListener('DOMContentLoaded', function foo(event) {
  // open search input
  document.querySelector('.search__submit').addEventListener('click', function () {
    let parent = this.parentNode
    if (parent.classList.contains('search-opened')) {
      parent.classList.remove('search-opened')
    } else {
      parent.classList.add('search-opened')
    }
  })
  // open burger menu on mobile
  document.querySelector('.menu-burger').addEventListener('click', function () {
    let parent = this.parentNode
    if (parent.classList.contains('menu-opened')) {
      parent.classList.remove('menu-opened')
    } else {
      parent.classList.add('menu-opened')
    }
  })
})

// -----------------------------START block of code which emplements open and closing seacrh dropdowns onClick----------------------------
let currentSelect = ''
let currentOption = ''
let selectItem = document.querySelectorAll('.options__item')

document.querySelectorAll('.select__header').forEach((item, index) => {
  item.addEventListener('click', () => clickFunction(index))
})
document.querySelectorAll('.options__item').forEach((option, index) => {
  option.addEventListener('click', (e) => {
    closeFunction(index, e)
  })
})
// open dropdown on click
function clickFunction(index) {
  currentSelect = document.getElementsByClassName('select__header')[index]
  currentSelect.parentElement.classList.onclick =  function()toggle('is-active')
  console.log(currentSelect.parentElement)

  document.body.addEventListener('click', addClickEventOnBody, true)
  // debugger
}
// close dropdown onclick on body
function addClickEventOnBody(e) {
  const target = e.target
  if (target !== currentSelect || target !== selectItem) {
    currentSelect.parentElement.classList.remove('is-active')
  }
}
// close dropdown onClick on options__item and handling item value inside select
function closeFunction(index, e) {
  //  get selected option
  let currentOption = document.getElementsByClassName('options__item')[index]
  // get current select header
  let selectValue = currentOption.closest('.select').querySelector('.select__current')
  // get text of current option
  let text = currentOption.innerText
  // push text of current option into select header
  selectValue.innerText = text
  // select value equal to valuo of clicked option. Now we can send this data inside tag form
  selectValue.value = e.target.value
  console.log(selectValue.value)
  // console.log(selectValue.options[selectValue.selectedIndex].value)
}

// ---------------------------END block of code which emplements open and closing seacrh dropdowns onClick-------------------------------

// initialization of first slider
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

// initialization of second slider
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
