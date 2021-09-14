document.querySelector('.open-search').addEventListener('click', function () {
    let parent = this.parentNode
  if (parent.classList.contains('search-opened')) {
    this.classList.remove('search-opened')
  } else {
    this.classList.add('search-opened')
  }
})
