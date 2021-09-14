document.querySelector('.open-search').addEventListener('click', function () {
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
    parent.classList.add('user-opened')
  }
})
