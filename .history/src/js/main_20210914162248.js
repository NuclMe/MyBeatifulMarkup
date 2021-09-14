document.querySelector('.open-search').addEventListener('click', function () {
  let parent = this.parentNode
  if (parent.classList.contains('search-opened')) {
    parent.classList.remove('search-opened')
  } else {
    parent.classList.add('search-opened')
  }
})
document.querySelector('.user-img').addEventListener('click', function () {
  let parent = this.parentNode
  if (parent.classList.contains('user-opened')) {
    parent.classList.remove('search-opened')
  } else {
    parent.classList.add('search-opened')
  }
})
