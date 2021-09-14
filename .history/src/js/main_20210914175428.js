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
    parent.classList.remove('user-opened')
  } else {
    parent.classList.add('user-opened')
  }
})
