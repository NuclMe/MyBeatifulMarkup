document.querySelector('.open-search').addEventListener('click', function () {
  if (this.closest('search').classList.contains('search-opened')) {
    this.classList.remove('search-opened')
  } else {
    this.closest('search').classList.add('search-opened')
  }
})
