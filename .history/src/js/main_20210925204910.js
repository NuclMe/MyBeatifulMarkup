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
  option.addEventListener('click', () => {
    closeFunction(index)
  })
})
// open dropdown on click
function clickFunction(index) {
  currentSelect = document.getElementsByClassName('select__header')[index]
  currentSelect.parentElement.classList.toggle('is-active')

  document.body.addEventListener('click', addClickEventOnBody, true)
}
// close dropdown onclick on body
function addClickEventOnBody(e) {
  const target = e.target
  if (target !== currentSelect || target !== selectItem) {
    currentSelect.parentElement.classList.remove('is-active')
  }
}
// close dropdown onClick on options__item and handling item value inside select
function closeFunction(index) {
  let currentOption = document.getElementsByClassName('options__item')[index]
  let currentSelect = currentOption.parentElement.previousSibling
  let text = this.innerText
  // console.log(currentSelect)
  debugger
  // let select = currentOption.parentElement.classList.contains('.select')
  // let currentText = select.querySelector('.select__current')
  // currentText.innerText = text
  // selectHidden.value = text
  // let selectItem = document.getElementsByClassName('.options__item')[index]

  // select.classList.remove('is-active')

  // let text = this.innerText

  // // let select = this.closest('.select')
  // let selectHidden = document.querySelector('.hidden-select')
  // currentText = select.querySelector('.select__current')
  // currentText.innerText = text
  // selectHidden.value = text
  // select.classList.remove('is-active')
  // debugger
}

// ---------------------------END block of code which emplements open and closing seacrh dropdowns onClick-------------------------------

// const target = e.target
// if (target !== currentSelect || target !== selectItem) {
//   currentSelect.parentElement.classList.remove('is-active')
//   // target.removeEventListener('click', checkBody)
// }

// let select = function () {
//   let selectHeader = document.querySelectorAll('.select__header')
//   let selectItem = document.querySelectorAll('.options__item')
//   selectToggle(selectItem)
//   selectHeader.forEach((item) => {
//     item.addEventListener('click', selectToggle)
//   })
//   selectItem.forEach((item) => {
//     item.addEventListener('click', selectChoose)
//   })

//   function selectChoose() {
//     let text = this.innerText

//     let select = this.closest('.select')
//     let selectHidden = document.querySelector('.hidden-select')
//     currentText = select.querySelector('.select__current')
//     currentText.innerText = text
//     selectHidden.value = text
//     select.classList.remove('is-active')
//   }
// }

// function selectToggle(val) {
//   let funcvalue = val
//   let selectHeader = document.querySelector('.select__header')
//   console.log(selectHeader)
//   selectHeader.parentElement.classList.toggle('is-active')
//   document.querySelector('body').addEventListener('click', (e) => {
//     const target = e.target
//     if (target !== selectHeader || target !== funcvalue) {
//       document.querySelector('.select').classList.remove('is-active')
//       debugger
//     } else {
//       selectToggle()
//     }
//   })
// }
// select()

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

// const selected1 = document.querySelector("#select1 .selected");
//   const optionsContainer1 = document.querySelector("#select1 .options-container");
//   const optionsList1 = document.querySelectorAll(" #select1 .option");
//   selected1.addEventListener("click", () => {
//     optionsContainer1.classList.toggle("active");
//   });
//   optionsList1.forEach(o => {
//     o.addEventListener("click", () => {
//       selected1.innerHTML = o.querySelector("label").innerHTML;
//       optionsContainer1.classList.remove("active");
//     });
//   });
//   const selected2 = document.querySelector("#select2 .selected");
//   const optionsContainer2 = document.querySelector("#select2 .options-container");
//   const optionsList2 = document.querySelectorAll(" #select2 .option");
//   selected2.addEventListener("click", () => {
//     optionsContainer2.classList.toggle("active");
//   });
//   optionsList2.forEach(o => {
//     o.addEventListener("click", () => {
//       selected2.innerHTML = o.querySelector("label").innerHTML;
//       optionsContainer2.classList.remove("active");
//     });
//   });
//   const selected3 = document.querySelector("#select3 .selected");
//   const optionsContainer3 = document.querySelector("#select3 .options-container");
//   const optionsList3 = document.querySelectorAll(" #select3 .option");
//   selected3.addEventListener("click", () => {
//     optionsContainer3.classList.toggle("active");
//   });
//   optionsList3.forEach(o => {
//     o.addEventListener("click", () => {
//       selected3.innerHTML = o.querySelector("label").innerHTML;
//       optionsContainer3.classList.remove("active");
//     });
//   });
//   const selected4 = document.querySelector("#select4 .selected");
//   const optionsContainer4 = document.querySelector("#select4 .options-container");
//   const optionsList4 = document.querySelectorAll(" #select4 .option");
//   selected4.addEventListener("click", () => {
//     optionsContainer4.classList.toggle("active");
//   });
//   optionsList4.forEach(o => {
//     o.addEventListener("click", () => {
//       selected4.innerHTML = o.querySelector("label").innerHTML;
//       optionsContainer4.classList.remove("active");
//     });
//   });
//   const animItems = document.querySelectorAll('._anim-items');
//   if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//       for (let index = 0; index < animItems.length; index++) {
//         const animItem = animItems[index];
//         const animItemHeight = animItem.offsetHeight;
//         const animItemOffset = offset(animItem).top;
//         const animStart = 4;
//         let animItemPoint = window.innerHeight - animItemHeight / animStart;
//         if (animItemHeight > window.innerHeight) {
//           animItemPoint = window.innerHeight - window.innerHeight / animStart;
//         }
//         if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset+animItemHeight)) {
//           animItem.classList.add('_active');
//         } else {
//           if (!animItem.classList.contains('_anim-no-hide')) {
//             animItem.classList.remove('_active');
//           }
//         }
//       }
//     }
//     function offset(el) {
//       const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
//       return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//       animOnScroll();
//   }
