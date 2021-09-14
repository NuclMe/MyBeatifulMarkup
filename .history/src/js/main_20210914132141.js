document.querySelector('.open-search').addEventListener('click', function () {
  if (this.classList.contains('search-opened')) {
    this.classList.remove('search-opened')
  } else {
    this.classList.add('search-opened')
  }
})
